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

  return json_decode($res->getBody());
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'igv', '/find-stockists/(?P<zipcode>\d+)', array(
    'methods' => 'GET',
    'callback' => 'find_stockists_call',
  ) );
} );
