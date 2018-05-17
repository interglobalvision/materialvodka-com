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
      'name'      	=> __( 'Bottle background image', 'cmb2' ),
      'id'        	=> $prefix . 'home_bottle_image',
      'type'      	=> 'file',
      'options' => array(
        'url' => false, // Hide the text input for the url
      ),
      'query_args' => array(
        'type' => array(
          'image/jpeg',
          'image/png',
        ),
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

    $metabox->add_field( array(
      'name'      	=> __( 'Video award fallback image (jpeg/png)', 'cmb2' ),
      'desc' => esc_html__( 'Appears if 0 video awards are published', 'cmb2' ),
      'id'        	=> $prefix . 'home_video_award_fallback_image',
      'type'      	=> 'file',
      'options' => array(
        'url' => false, // Hide the text input for the url
      ),
      'query_args' => array(
        'type' => array(
          'image/jpeg',
          'image/png',
        ),
      ),
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
    'name' => esc_html__( 'City', 'cmb2' ),
    'desc' => esc_html__( 'Required', 'cmb2' ),
    'id'   => $prefix . 'stockist_city',
    'type' => 'select',
    'show_option_none' => true,
    'options'          => array(
      'ny' => __( 'NY', 'cmb2' ),
      'la'   => __( 'LA', 'cmb2' ),
      'miami'     => __( 'Miami', 'cmb2' ),
    ),
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
    'desc' => esc_html__( 'Must begin with https:// or http://', 'cmb2' ),
    'id'   => $prefix . 'stockist_website',
    'type' => 'text_url',
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Facebook page URL', 'cmb2' ),
    'desc' => esc_html__( 'Must begin with https:// or http://', 'cmb2' ),
    'id'   => $prefix . 'stockist_facebook',
    'type' => 'text_url',

  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Instagram handle', 'cmb2' ),
    'desc' => esc_html__( 'Without the @', 'cmb2' ),
    'id'   => $prefix . 'stockist_instagram',
    'type' => 'text',
  ) );

}

add_action( 'cmb2_init', 'igv_cmb_metabox_video_awards' );
function igv_cmb_metabox_video_awards() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  $metabox = new_cmb2_box( array(
    'id'            => $prefix . 'metabox-video-award',
    'title'         => esc_html__( 'Video Awards Metabox', 'cmb2' ),
    'object_types'  => array( 'video-award' ), // Post type
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
      'media_buttons' => false,
    ),
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Minutes', 'cmb2' ),
    'id'   => $prefix . 'video_award_minutes',
    'type' => 'text',
  ) );

  $metabox->add_field( array(
    'name' => esc_html__( 'Seconds', 'cmb2' ),
    'id'   => $prefix . 'video_award_seconds',
    'type' => 'text',
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
    $locate_meta->add_group_field( $locate_video_id, array(
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

    // Video Poster
    $locate_meta->add_group_field( $locate_video_id, array(
      'name'    => 'Video Poster',
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

// Product Metaboxes
add_action( 'cmb2_init', 'igv_product_metaboxes' );
function igv_product_metaboxes() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  $product = new_cmb2_box( array(
    'id'            => 'product_meta',
    'title'         => __( 'Product Information', 'cmb2' ),
    'object_types'  => array( 'product', ), // Post type
    'context'       => 'normal',
    'priority'      => 'high',
    'show_names'    => true, // Show field names on the left
    // 'cmb_styles' => false, // false to disable the CMB stylesheet
    // 'closed'     => true, // Keep the metabox closed by default
  ) );

  $product->add_field( array(
    'name'       => __( 'Shopify Product Handle', 'cmb2' ),
    'id'         => $prefix . 'shopify_product_handle',
    'desc'    => __( 'The handle can be found on product URLs. Ex. in https://myshop.myshopify.com/products/my-product "my-product" is the handle', 'igb' ),
    'type'       => 'text',
  ) );

  $product->add_field( array(
    'name' => 'Product Gallery',
    'desc' => '',
    'id'         => $prefix . 'shopify_product_gallery',
    'type' => 'file_list',
    'preview_size' => array( 100, 100 ),
    'query_args' => array( 'type' => 'image' ), // Only images attachment
  ) );

}

add_action( 'cmb2_init', 'igv_cmb_metabox_recipe' );
function igv_cmb_metabox_recipe() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  /**
   * Initiate the metabox
   */
  $recipe_metaboxes = new_cmb2_box( array(
    'id'            => $prefix . 'recipe_metaboxes',
    'title'         => __( 'Ingredients', 'cmb2' ),
    'object_types'  => array( 'recipe', ), // Post type
    'context'       => 'normal',
    'priority'      => 'high',
    'show_names'    => true, // Show field names on the left
  ) );

  $ingredients_group_id = $recipe_metaboxes->add_field( array(
  'id'          => $prefix . 'ingredients_group',
  'type'        => 'group',
  'options'     => array(
    'group_title'   => __( 'Ingredient {#}', 'cmb2' ),
    'add_button'    => __( 'Add Another Ingredient', 'cmb2' ),
    'remove_button' => __( 'Remove Ingredient', 'cmb2' ),
    'sortable'      => true, // beta
  ),
  ) );

    $recipe_metaboxes->add_group_field( $ingredients_group_id , array(
    'name' => 'Ingredient',
    'id'   => 'ingredient_text',
    'type' => 'text',
  ) );

   $recipe_metaboxes->add_group_field( $ingredients_group_id , array(
    'name' => 'Quantity',
    'id'   => 'quantity_text',
    'type' => 'text',
  ) );
}

/**
 * Add Vodka page metaboxes
 */
add_action( 'cmb2_init', 'igv_cmb_metaboxes_vodka_page' );
function igv_cmb_metaboxes_vodka_page() {

  $prefix = '_igv_';

  // Get Locate page
  $vodka_page = get_page_by_path('/vodka');

  // Check if vodka page exists
  if(!empty($vodka_page)) {

    // Vodka Init metabox
    $vodka_meta = new_cmb2_box( array(
      'id'            => $prefix . 'vodka_options',
      'title'         => __( 'Vodka Options', 'cmb2' ),
      'object_types'  => array( 'page', ), // Post type
      'show_on'       => array(
        'key' => 'id',
        'value' => array($vodka_page->ID)
      ),
      'context'       => 'normal',
      'priority'      => 'high',
      'show_names'    => true, // Show field names on the left
    ) );

    //Vodka Video group
    $vodka_video_id = $vodka_meta->add_field( array(
      'id'      => $prefix . 'vodka_video_group',
      'name'    => 'Video',
      'type'        => 'group',
      'repeatable'  => false, // use false if you want non-repeatable group
    ) );

    //Vodka Video mp4
    $vodka_meta->add_group_field( $vodka_video_id, array(
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

    //Vodka Video webm
    $vodka_meta->add_group_field( $vodka_video_id, array(
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

    //Vodka Video Poster
    $vodka_meta->add_group_field( $vodka_video_id, array(
      'name'    => 'Video Poster',
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
    ) );

    //Vodka Image
    $vodka_meta->add_field( array(
      'name'    => 'Vodka Image',
      'id'      => $prefix . 'vodka_image',
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

    // World Init metabox
    $world_meta = new_cmb2_box( array(
      'id'            => $prefix . 'world_options',
      'title'         => __( 'World Options', 'cmb2' ),
      'object_types'  => array( 'page', ), // Post type
      'show_on'       => array(
        'key' => 'id',
        'value' => array($vodka_page->ID)
      ),
      'context'       => 'normal',
      'priority'      => 'high',
      'show_names'    => true, // Show field names on the left
    ) );

    //World Video group
    $world_video_id = $world_meta->add_field( array(
      'id'      => $prefix . 'world_video_group',
      'name'    => 'Video',
      'type'        => 'group',
      'repeatable'  => false, // use false if you want non-repeatable group
    ) );

    //World Video mp4
    $world_meta->add_group_field( $world_video_id, array(
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

    //World Video webm
    $world_meta->add_group_field( $world_video_id, array(
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

    //World Video Poster
    $world_meta->add_group_field( $world_video_id, array(
      'name'    => 'Video Poster',
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
    ) );

    //World Image

    $world_meta->add_field( array(
      'name'    => 'World Image',
      'id'      => $prefix . 'world_image',
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

    //List of Institutions

    // Init metabox
    $institution_list = new_cmb2_box( array(
      'id'            => $prefix . 'institution_list_options',
      'title'         => __( 'Insititution List', 'cmb2' ),
      'object_types'  => array( 'page', ), // Post type
      'show_on'       => array(
        'key' => 'id',
        'value' => array($vodka_page->ID)
      ),
      'context'       => 'normal',
      'priority'      => 'high',
      'show_names'    => true, // Show field names on the left
    ) );

    $institution_list->add_field( array(
    'name' => esc_html__( 'List', 'cmb2' ),
    'desc' => esc_html__( 'field description (optional)', 'cmb2' ),
    'id'   => $prefix . 'institution_list_textarea',
    'type' => 'textarea',
  ) );

  //Bottom Image

  $vodka_meta->add_field( array(
    'name'    => 'Bottom Image',
    'id'      => $prefix . 'vodka_bottom_image',
    'desc' => esc_html__( 'Appears next to mailing list form', 'cmb2' ),
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

  }
}

add_action( 'cmb2_init', 'igv_cmb_metabox_winner' );
function igv_cmb_metabox_winner() {
  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  $metabox = new_cmb2_box( array(
    'id'            => $prefix . 'metabox_winner',
    'title'         => esc_html__( 'Options', 'cmb2' ),
    'object_types'  => array( 'prize-winner' ), // Post type
  ) );

  // Year
  $metabox->add_field( array(
    'name'    => 'Year',
    'id'      => $prefix . 'prize_winner_year',
    'type'    => 'text',
  ) );
}

add_action( 'cmb2_init', 'igv_cmb_metabox_prize' );
function igv_cmb_metabox_prize() {
  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  $prize_page = get_page_by_path('/prize');

  // Check if prize page exists
  if(!empty($prize_page)) {

    $metabox = new_cmb2_box( array(
      'id'            => $prefix . 'metabox_prize',
      'title'         => esc_html__( 'Options', 'cmb2' ),
      'object_types'  => array( 'page' ), // Post type
      'show_on'      => array(
        'key' => 'id',
        'value' => array($prize_page->ID)
      ),
      'context'       => 'normal',
      'priority'      => 'high',
      'show_names'    => true, // Show field names on the left
    ) );

    // Prize video group
    $prize_video_id = $metabox->add_field( array(
      'id'      => $prefix . 'prize_video_group',
      'type'        => 'group',
      'repeatable'  => false, // use false if you want non-repeatable group
    ) );

    // Prize video mp4
    $metabox->add_group_field( $prize_video_id , array(
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

    // Prize video webm
    $metabox->add_group_field( $prize_video_id , array(
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

    // Prize video poster
    $metabox->add_group_field( $prize_video_id , array(
      'name'    => 'Video Poster',
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
