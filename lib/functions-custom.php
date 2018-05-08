<?php

/**
* Query and return all Stockists that match the $city_slug
*
* @param string $city_slug Slug for the city
* @return object Returns a WP_Query object
*/
function get_stockists_by_city($city_slug) {
  $args = array(
    'post_type' => 'stockist',
    'meta_query' => array(
      array(
        'key'     => '_igv_stockist_city',
        'value'   => array($city_slug),
      ),
    ),
    'order_by' => 'meta_value',
    'order'      => 'ASC',
    'meta_key'     => '_igv_stockist_city',
    'posts_per_page' => -1,
  );

  return new WP_Query($args);
}

/**
 * Generate a unordered listof stockist by query
 *
 * @param object $query Query of stockists
 * @return void It outputs markup for the list
 */
function generate_stockists_list($query) {

  if (!empty($query)) {
    echo '<ul>';
    while($query->have_posts()) {
      $query->the_post();

      $website = get_post_meta(get_the_ID(), '_igv_stockist_website', true);
      echo '<li class="font-uppercase">';
      echo '<a href="' . $website . '" rel="noopener noreferrer" target="_blank">' . the_title() . '</a>';
      echo '</li>';
    }
    echo '</ul>';
  }

  wp_reset_postdata();
}
