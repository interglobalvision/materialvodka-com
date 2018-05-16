<?php

function find_stockists_call(WP_REST_Request $request) {

  $zipcode = $request->get_param('zipcode');
  $latitude = $request->get_param('latitude');
  $longitude = $request->get_param('longitude');

  // If using Zipcode
  if(!empty($zipcode)) {
    // Get stockists
    $response = find_stockists($zipcode);

  } elseif(!empty($latitude) && !empty($longitude)) { // If using geolocation

    $postal_code = geoToZip($latitude, $longitude);

    // Check if geoToZip returned an error
    if(isset($postal_code['error'])) {
      wp_send_json_error(array(
        'error' => $postal_code['message'],
      ));
    } else {
      // Find stockists
      $response = find_stockists($postal_code);
    }

  } else { // Parameters are incomplete
    wp_send_json_error(array(
      'error' => 'Request parameters missing',
    ));
  }

  // Check if the response is an error
  if(isset($response['error'])) {
    wp_send_json_error(array(
      'error' => $response['message'],
    ));
  } else {
    return $response;
  }
}

function find_stockists($zipcode) {
  // Get Site Options
  $site_options = get_site_option('_igv_site_options');

  // Check the API key
  if(!isset($site_options['zipcode_api_key'])) {
    return array(
      'error' => true,
      'message' => 'Zipcode API key missing',
    );
  }

  // Get Zip Code Api Key
  $key = $site_options['zipcode_api_key'];

  // Init http client
  // https://github.com/guzzle/guzzle
  $client = new \GuzzleHttp\Client();

  // Wrapped in try/catch to catch exceptions
  try {

    // Requestes all zipcodes whithin 3 miles
    $res = $client->request('GET', 'https://www.zipcodeapi.com/rest/' . $key . '/radius.json/' . $zipcode . '/3/mile');

    // Decode the response's body
    $decoded_res = json_decode($res->getBody());

    // Get the found zip codes. This includes the inital zip code
    $zipcodes = $decoded_res->zip_codes;

    // Will use this to make an array of zipcodes
    $query_zipcodes = [];

    // Push each zipcode to our array
    foreach($zipcodes as $zipcode) {
      array_push($query_zipcodes, $zipcode->zip_code);
    }

    // Query args
    $args = array(
      'post_type' => 'stockist',
      'meta_query' => array(
        array(
          'key'     => '_igv_stockist_zipcode',
          'value'   => $query_zipcodes,
        ),
      ),
      'meta_key'     => '_igv_stockist_zipcode',
      'posts_per_page' => -1,
    );

    // Get the stockists
    $stockists = get_posts($args);

    // Will use this array to store our stockists with its meta
    $stockists_with_meta = [];

    foreach($stockists as $stockist) {
      // Get stockist's meta
      $meta = get_post_meta($stockist->ID);

      // Merge meta to stockits
      $stockist_with_meta = array_merge($stockist->to_array(), $meta);

      // Push to our array
      array_push($stockists_with_meta, $stockist_with_meta);
    }

    // Return response
    return array(
      'success' => true,
      'stockists' => $stockists_with_meta,
    );

  } catch (Exception $e) {
    // Return generic server error
    return array(
      'error' => true,
      'message' => 'Server error',
    );
  }
}

function geoToZip($latitude, $longitude) {
  // Get Site Options
  $site_options = get_site_option('_igv_site_options');

  // Check the API key
  if(!isset($site_options['_igv_google_api_key'])) {
    return array(
      'error' => true,
      'message' => 'Google API key missing',
    );
  }

  $google_api_key = $site_options['_igv_google_api_key'];

  // Init geocoder
  // http://jstayton.github.io/GoogleMapsGeocoder/classes/GoogleMapsGeocoder.html
  $Geocoder = new GoogleMapsGeocoder();

  // Set API key for authentication
  $Geocoder->setApiKey($google_api_key);

  // Set lat and lng to geocode
  $Geocoder->setLatitudeLongitude($latitude, $longitude);

  // Geocode that thing. Returns an array of addresses that match the geolocation
  $response = $Geocoder->geocode();

  // Get the addreses from the response
  $addresses = $response['results'];

  // If addreses is empty
  if(empty($addresses)) {
    return array(
      'error' => true,
      'message' => 'Address not found',
    );
  }

  $response = '';
  $index = 0;

  // Go thru addreses and find the first zipcode (postal code)
  while($response == '') {
    // Check if the components are set
    if(isset($addresses[$index]['address_components'])) {
      // Get the components
      $address_components = $addresses[$index]['address_components'];

      // Check the size of the found postal code
      if(sizeof($address_components) >= 7 && $address_components[7]['types']['0'] == 'postal_code') {

        // Save the postal code (trimed to be 5 digits long, just in case)
        $response = substr($address_components[7]['long_name'], 0, 5);
      }

      // Check the first address to see if inside the USA
      if($address_components[6]['short_name'] !== 'US') {
        $response = array(
          'error' => true,
          'message' => 'Address outside of USA',
        );
      }

    }
  }

  if($response == '') {
    return array(
      'error' => true,
      'message' => 'Server error',
    );
  } else {
    return $response;
  }
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'igv', '/find-stockists', array(
    'methods' => 'GET',
    'callback' => 'find_stockists_call',
  ) );
} );
