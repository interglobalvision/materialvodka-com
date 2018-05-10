<?php

function find_stockists_call($data) {

  // Get Site Options
  $site_options = get_site_option('_igv_site_options');

  // Get Zip Code Api Key
  $key = $site_options['zipcode_api_key'];

  // Get zipcode
  $zipcode = $data['zipcode'];

  // init http client
  // https://github.com/guzzle/guzzle
  $client = new \GuzzleHttp\Client();

  // Requestes all zipcodes whithin 3 miles
  $res = $client->request('GET', 'https://www.zipcodeapi.com/rest/' . $key . '/radius.json/' . $zipcode . '/3/mile');

  $decoded_res = json_decode($res->getBody());

  $zip_codes = $decoded_res->zip_codes;

  $query_zip_codes = [];

  foreach($zip_codes as $zipcode) {
    array_push($query_zip_codes, $zipcode->zip_code);
  }

  $args = array(
    'post_type' => 'stockist',
    'meta_query' => array(
      array(
        'key'     => '_igv_stockist_zipcode',
        'value'   => $query_zip_codes,
      ),
    ),
    'meta_key'     => '_igv_stockist_zipcode',
    'posts_per_page' => -1,
  );

  $stockists = get_posts($args);


  $stockists_with_meta = [];

  foreach($stockists as $stockist) {
    $meta = get_post_meta($stockist->ID);
    $stockist_with_meta = array_merge($stockist->to_array(), $meta);

    array_push($stockists_with_meta, $stockist_with_meta);
  }

  return $stockists_with_meta;

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'igv', '/find-stockists/(?P<zipcode>\d+)', array(
    'methods' => 'GET',
    'callback' => 'find_stockists_call',
  ) );
} );
