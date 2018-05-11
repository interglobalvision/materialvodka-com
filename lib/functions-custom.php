<?php

// Custom functions (like special queries, etc)

/**
* Return array of season term slugs ordered ASC from current season
*
* @return array Returns an array of term slugs
*/
function get_ordered_season_array() {
  $today = new DateTime();

  // get the season dates
  $spring = new DateTime('March 20');
  $summer = new DateTime('June 20');
  $fall = new DateTime('September 22');
  $winter = new DateTime('December 21');

  switch(true) {
    case $today >= $spring && $today < $summer:
      return ['spring', 'summer', 'fall', 'winter'];

    case $today >= $summer && $today < $fall:
      return ['summer', 'fall', 'winter', 'spring'];

    case $today >= $fall && $today < $winter:
      return ['fall', 'winter', 'spring', 'summer'];

    default:
      return ['winter', 'spring', 'summer', 'fall'];
  }
}

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

/**
 * Generate responsive background css in a single string
 * useful for inline-styles
 *
  * @param {string} element_class - the attatchment id
 * @param {string} attatchment_id - the attatchment id
 * @param {array} sizes - a relational array of width/image_size values, should come in ASC order
 */
function responsive_background_styles($element_class, $attatchment_id, $sizes) {
  // Open style tag
  $style = '<style type="text/css">';

  foreach ($sizes as $size) {
    // Get the the attatchment src of specific size
    $src = wp_get_attachment_image_src($attatchment_id, $size);

    if(!empty($src)) {
      // Append media query and background image url
      $style .= '@media (min-width: ' . $src[1] . 'px) {
        .' . $element_class . ' {
        background-image: url(' . $src[0] . ');
        }
      } ';
    }
  }

  // Close style tag
  $style .= '</style>';

  // Output all the style
  echo $style;
}

/**
 * Return a string prefixed with `bg-`
 *
 * @param {string} $id - the unique identifier
 * @param {bool} $echo - to echo the string instead of return it
 */
function get_background_class($id, $echo = false) {
  $class = 'bg-' . $id;

  if(!$echo) {
    return $class;
  }
  echo $class;

}
