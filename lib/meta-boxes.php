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

add_action( 'cmb2_init', 'igv_cmb_metabox_stockist' );
function igv_cmb_metabox_stockist() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

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
    'type' => 'text_medium',
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

add_action( 'cmb2_init', 'igv_cmb_metabox_video_awards' );
function igv_cmb_metabox_video_awards() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  $metabox = new_cmb2_box( array(
    'id'            => $prefix . 'metabox-video-award',
    'title'         => esc_html__( 'Video Awards Metabox', 'cmb2' ),
    'object_types'  => array( 'video_award' ), // Post type
  ) );


  $metabox->add_field( array(
    'name' => esc_html__( 'Video Year', 'cmb2' ),
    'id'   => $prefix . 'video_award_video_year',
    'type' => 'text',
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Artist(s)', 'cmb2' ),
    'id'   => $prefix . 'video_award_artists',
    'type' => 'text',
  ) );

  $metabox->add_field( array(
    'name'    => esc_html__( 'Bio', 'cmb2' ),
    'desc'    => esc_html__( 'field description (optional)', 'cmb2' ),
    'id'      => $prefix . 'video_award_bio',
    'type'    => 'wysiwyg',
    'options' => array(
      'textarea_rows' => 5,
    ),
  ) );


}
/**
 * Add Locate page metaboxes
 */
add_action( 'cmb2_init', 'igv_cmb_metaboxes_locate_page' );
function igv_cmb_metaboxes_locate_page() {

  $prefix = '_igv_';

  // Get Locate page
  $locate_page = get_page_by_path('/locate');

  // Check if locate page exists
  if(!empty($locate_page)) {

    // Init metabox
    $locate_meta = new_cmb2_box( array(
      'id'            => $prefix . 'locate_options',
      'title'         => __( 'Options', 'cmb2' ),
      'object_types'  => array( 'page', ), // Post type
      'show_on'       => array(
        'key' => 'id',
        'value' => array($locate_page->ID)
      ),
      'context'       => 'normal',
      'priority'      => 'high',
      'show_names'    => true, // Show field names on the left
    ) );


    // Home Image
    $locate_meta->add_field( array(
      'name'    => 'Home Image',
      'id'      => $prefix . 'locate_home_image',
      'type'    => 'file',
      'options' => array(
        'url' => false, // Hide the text input for the url
      ),
      'query_args' => array(
        'type' => array(
          'image/jpeg',
          'image/png',
        ),
      ),
      'preview_size' => 'large', // Image size to use when previewing in the admin.
    ) );

    // Top Image
    $locate_meta->add_field( array(
      'name'    => 'Top Image',
      'id'      => $prefix . 'locate_top_image',
      'type'    => 'file',
      'options' => array(
        'url' => false, // Hide the text input for the url
      ),
      'query_args' => array(
        'type' => array(
          'image/jpeg',
          'image/png',
        ),
      ),
      'preview_size' => 'large', // Image size to use when previewing in the admin.
    ) );

    // Bottom Image
    $locate_meta->add_field( array(
      'name'    => 'Bottom Image',
      'id'      => $prefix . 'locate_bottom_image',
      'type'    => 'file',
      // Optional:
      'options' => array(
        'url' => false, // Hide the text input for the url
      ),
      'query_args' => array(
        'type' => array(
          'image/jpeg',
          'image/png',
        ),
      ),
      'preview_size' => 'large', // Image size to use when previewing in the admin.
    ) );


    // Video group
    $locate_video_id = $locate_meta->add_field( array(
      'id'      => $prefix . 'locate_video_group',
      'name'    => 'Video',
      'type'        => 'group',
      'repeatable'  => false, // use false if you want non-repeatable group
    ) );

    // Video mp4
    $locate_meta->add_group_field( $locate_video_id, array(
      'name'    => 'Video (mp4)',
      'id'      => $prefix . 'locate_video_mp4',
      'type'    => 'file',
      'options' => array(
        'url' => false, // Hide the text input for the url
      ),
      'query_args' => array(
        'type' => array(
          'video/mp4',
        ),
      ),
    ) );

    // Video webm
    $locate_meta->add_group_field( $locate_video_id, array(
      'name'    => 'Video (webm)',
      'id'      => $prefix . 'locate_video_webm',
      'type'    => 'file',
      'options' => array(
        'url' => false, // Hide the text input for the url
      ),
      'query_args' => array(
        'type' => array(
          'video/webm',
        ),
      ),
    ) );

    // Video webm
    $locate_meta->add_group_field( $locate_video_id, array(
      'name'    => 'Video Poster',
      'id'      => $prefix . 'locate_video_poster',
      'type'    => 'file',
      'options' => array(
        'url' => false, // Hide the text input for the url
      ),
      'query_args' => array(
        'type' => array(
          'image/jpeg',
          'image/png',
        ),
      ),
      'preview_size' => 'large', // Image size to use when previewing in the admin.
    ));
  }

  //

}
?>
