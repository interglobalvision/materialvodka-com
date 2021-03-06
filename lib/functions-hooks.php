<?php

// Custom hooks (like excerpt length etc)

// Programatically create pages
function create_custom_pages() {
  $custom_pages = array(
    'home' => 'Home',
    'locate' => 'Locate',
    'vodka' => 'Vodka',
    'prize' => 'Prize',
    'press' => 'Press',
    'contact' => 'Contact',
    'terms-and-conditions' => 'Terms & Conditions',
    'privacy-policy' => 'Privacy Policy',
  );
  foreach($custom_pages as $page_name => $page_title) {
    $page = get_page_by_path($page_name);
    if( empty($page) ) {
      wp_insert_post( array(
        'post_type' => 'page',
        'post_title' => $page_title,
        'post_name' => $page_name,
        'post_status' => 'publish'
      ));
    }
  }
}
add_filter( 'after_setup_theme', 'create_custom_pages' );
