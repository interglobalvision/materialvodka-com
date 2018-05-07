<?php

/* Get post objects for select field options */
function get_post_objects( $query_args ) {
  $args = wp_parse_args( $query_args, array(
    'post_type' => 'post',
  ) );
  $posts = get_posts( $args );
  $post_options = array();
  if ( $posts ) {
    foreach ( $posts as $post ) {
      $post_options [ $post->ID ] = $post->post_title;
    }
  }
  return $post_options;
}


/**
 * Include and setup custom metaboxes and fields.
 *
 * @category YourThemeOrPlugin
 * @package  Metaboxes
 * @license  http://www.opensource.org/licenses/gpl-license.php GPL v2.0 (or later)
 * @link     https://github.com/WebDevStudios/CMB2
 */

/**
 * Hook in and add metaboxes. Can only happen on the 'cmb2_init' hook.
 */

// Start with an underscore to hide fields from custom fields list
$prefix = '_igv_';

add_action( 'cmb2_init', 'igv_cmb_metabox_stockist' );
function igv_cmb_metabox_stockist() {

  $metabox = new_cmb2_box( array(
    'id'            => $prefix . 'metabox-stockist',
    'title'         => esc_html__( 'Stockist Metabox', 'cmb2' ),
    'object_types'  => array( 'stockist' ), // Post type
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Zip code', 'cmb2' ),
    'desc' => esc_html__( 'Required', 'cmb2' ),
    'id'   => $prefix . 'stockist_zipcode',
    'type' => 'text_small',
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Address', 'cmb2' ),
    'desc' => esc_html__( 'Full address', 'cmb2' ),
    'id'   => $prefix . 'stockist_address',
    'type' => 'text',
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Phone number', 'cmb2' ),
    'id'   => $prefix . 'stockist_phone',
    'type' => 'text',
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Website', 'cmb2' ),
    'id'   => $prefix . 'stockist_website',
    'type' => 'text_url',
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Facebook', 'cmb2' ),
    'id'   => $prefix . 'stockist_facebook',
    'type' => 'text_url',
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Instagram', 'cmb2' ),
    'id'   => $prefix . 'stockist_instagram',
    'type' => 'text_url',
  ) );

}
?>
