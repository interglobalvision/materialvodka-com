<?php

function find_stockists_call($data) {
  // Zip is required
  if (!array_key_exists('zip', $data)) {
    wp_send_json_error();
  }

  // Get Site Options
  $site_options = get_site_option('_igv_site_options');

  // Get Zip Code Api Key
  $key = $site_options['zipcode_api_key'];

  // init http client
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
    wp_send_json_error();
  }

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'igv', '/find-stockists/(?P<zipcode>\d+)', array(
    'methods' => 'GET',
    'callback' => 'find_stockists_call',
  ) );
} );
