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
add_action( 'cmb2_init', 'igv_cmb_metabox_home' );
function igv_cmb_metabox_home() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  $home_page = get_page_by_path('home');

  // Check if home page exists
  if(!empty($home_page)) {

    $metabox = new_cmb2_box( array(
      'id'            => $prefix . 'metabox_home',
      'title'         => esc_html__( 'Options', 'cmb2' ),
      'object_types'  => array( 'page' ), // Post type
      'show_on'      => array(
        'key' => 'id',
        'value' => array($home_page->ID)
      ),
    ) );

    $metabox->add_field( array(
      'name'      	=> __( 'Featured Recipe', 'cmb2' ),
      'id'        	=> $prefix . 'home_recipe',
      'type'      	=> 'post_search_ajax',
      'limit'      	=> 1,
      'sortable' 	 	=> false,
      'query_args'	=> array(
        'post_type'			=> array( 'recipe' ),
        'post_status'		=> array( 'publish' ),
        'posts_per_page'	=> -1
      )
    ) );

    // Video group
    $video_group_id = $metabox->add_field( array(
      'id'      => $prefix . 'home_video_group',
      'name'    => 'Video',
      'type'        => 'group',
      'repeatable'  => false, // use false if you want non-repeatable group
    ) );

    // Video mp4
    $metabox->add_group_field( $video_group_id, array(
      'name'    => 'Video (mp4)',
      'id'      => 'mp4',
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
    $metabox->add_group_field( $video_group_id, array(
      'name'    => 'Video (webm)',
      'id'      => 'webm',
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
    $metabox->add_group_field( $video_group_id, array(
      'name'    => 'Video preview image',
      'id'      => 'poster',
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

}
?>
