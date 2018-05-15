<?php
add_action( 'cmb2_admin_init', 'igv_register_shopify_options_metabox' );

function igv_register_shopify_options_metabox() {
  $prefix = '_igv_';

  $shop_options = new_cmb2_box( array(
    'id'           => $prefix . 'shop_options_page',
    'title'        => esc_html__( 'Shop Options', 'cmb2' ),
    'object_types' => array( 'options-page' ),
    /*
     * The following parameters are specific to the options-page box
     * Several of these parameters are passed along to add_menu_page()/add_submenu_page().
     */
    'option_key'      => $prefix . 'shop_options', // The option key and admin menu page slug.
    'icon_url'        => 'dashicons-layout', // Menu icon. Only applicable if 'parent_slug' is left empty.
    'menu_title'      => esc_html__( 'Shop Options', 'cmb2' ), // Falls back to 'title' (above).
    // 'parent_slug'     => 'themes.php', // Make options page a submenu item of the themes menu.
    'capability'      => 'manage_options', // Cap required to view options-page.
    // 'position'        => 1, // Menu position. Only applicable if 'parent_slug' is left empty.
    // 'admin_menu_hook' => 'network_admin_menu', // 'network_admin_menu' to add network-level options page.
    // 'display_cb'      => false, // Override the options-page form output (CMB2_Hookup::options_page_output()).
    'save_button'     => esc_html__( 'Save', 'cmb2' ), // The text for the options-page save button. Defaults to 'Save'.
  ) );

  // Shop options
  $shop_options->add_field( array(
    'name'    => esc_html__( 'Merch Page Options', 'cmb2' ),
    'desc'    => esc_html__( '', 'cmb2' ),
    'id'      => $prefix . 'merch_options_title',
    'type'    => 'title',
  ) );

  // Lookbook image
  $shop_options->add_field(array(
    'name'    => 'Lookbook Image',
    'id'      => $prefix . 'shop_lookbook_image',
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

  // Video group
  $shop_video_id = $shop_options->add_field( array(
    'id'      => $prefix . 'shop_video_group',
    'name'    => 'Video',
    'type'        => 'group',
    'repeatable'  => false, // use false if you want non-repeatable group
  ) );

  // Video mp4
  $shop_options->add_group_field( $shop_video_id, array(
    'name'    => 'Video (mp4)',
    'id'      => 'shop_video_mp4',
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
  $shop_options->add_group_field( $shop_video_id, array(
    'name'    => 'Video (webm)',
    'id'      => 'shop_video_webm',
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

  // Video poster
  $shop_options->add_group_field( $shop_video_id, array(
    'name'    => 'Video Poster',
    'id'      => 'shop_video_poster',
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

  // Shopify options
  $shop_options->add_field( array(
    'name'    => esc_html__( 'API Options', 'cmb2' ),
    'desc'    => esc_html__( '', 'cmb2' ),
    'id'      => $prefix . 'shopify_api_title',
    'type'    => 'title',
  ) );

  $shop_options->add_field( array(
    'name'    => esc_html__( 'Shopify Domain', 'cmb2' ),
    'desc'    => esc_html__( 'ex. shop.materialvodka.com', 'cmb2' ),
    'id'      => 'shopify_domain',
    'type'    => 'text',
  ) );

  $shop_options->add_field( array(
    'name'    => esc_html__( 'Shopify StoreFront Access Token', 'cmb2' ),
    'id'      => 'shopify_token',
    'type'    => 'text',
  ) );

}

add_action( 'cmb2_admin_init', 'igv_register_theme_options_metabox' );

function igv_register_theme_options_metabox() {
  $prefix = '_igv_';

  // Site options for general data

  $site_options = new_cmb2_box( array(
    'id'           => $prefix . 'site_options_page',
    'title'        => esc_html__( 'Site Options', 'cmb2' ),
    'object_types' => array( 'options-page' ),
    /*
     * The following parameters are specific to the options-page box
     * Several of these parameters are passed along to add_menu_page()/add_submenu_page().
     */
    'option_key'      => $prefix . 'site_options', // The option key and admin menu page slug.
    // 'menu_title'      => esc_html__( 'Options', 'cmb2' ), // Falls back to 'title' (above).
    // 'parent_slug'     => 'themes.php', // Make options page a submenu item of the themes menu.
    'capability'      => 'manage_options', // Cap required to view options-page.
    // 'position'        => 1, // Menu position. Only applicable if 'parent_slug' is left empty.
    // 'admin_menu_hook' => 'network_admin_menu', // 'network_admin_menu' to add network-level options page.
    // 'display_cb'      => false, // Override the options-page form output (CMB2_Hookup::options_page_output()).
    // 'save_button'     => esc_html__( 'Save Theme Options', 'cmb2' ), // The text for the options-page save button. Defaults to 'Save'.
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Navigation Menu', 'cmb2' ),
    'id'      => $prefix . 'nav_menu_title',
    'type'    => 'title',
  ) );

  // Nav menu group
  $nav_menu_group_id = $site_options->add_field( array(
    'id'      => $prefix . 'nav_menu_group',
    'type'        => 'group',
    'repeatable'  => false, // use false if you want non-repeatable group
  ) );

  // Prize
  $site_options->add_group_field( $nav_menu_group_id , array(
    'name' => esc_html__( 'Prize', 'cmb2' ),
		'id'   => 'prize',
		'type' => 'checkbox',
	) );

  // Videos
  $site_options->add_group_field( $nav_menu_group_id , array(
    'name' => esc_html__( 'Videos', 'cmb2' ),
		'id'   => 'videos',
		'type' => 'checkbox',
	) );

  // Vodka
  $site_options->add_group_field( $nav_menu_group_id , array(
    'name' => esc_html__( 'Vodka', 'cmb2' ),
		'id'   => 'vodka',
		'type' => 'checkbox',
	) );

  // Recipes
  $site_options->add_group_field( $nav_menu_group_id , array(
    'name' => esc_html__( 'Recipes', 'cmb2' ),
		'id'   => 'recipes',
		'type' => 'checkbox',
	) );

  // Locate
  $site_options->add_group_field( $nav_menu_group_id , array(
    'name' => esc_html__( 'Locate', 'cmb2' ),
		'id'   => 'locate',
		'type' => 'checkbox',
	) );

  // Merch
  $site_options->add_group_field( $nav_menu_group_id , array(
    'name' => esc_html__( 'Merch', 'cmb2' ),
		'id'   => 'merch',
		'type' => 'checkbox',
	) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Mailing List', 'cmb2' ),
    'id'      => $prefix . 'mailinglist_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Mailchimp Form Action URL', 'cmb2' ),
    'id'      => $prefix . 'mailchimp_url',
    'type'    => 'text',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Prize page video', 'cmb2' ),
    'id'      => $prefix . 'prize_video_title',
    'type'    => 'title',
  ) );

  // Prize video group
  $prize_video_id = $site_options->add_field( array(
    'id'      => $prefix . 'prize_video_group',
    'type'        => 'group',
    'repeatable'  => false, // use false if you want non-repeatable group
  ) );

  // Prize video mp4
  $site_options->add_group_field( $prize_video_id , array(
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
  $site_options->add_group_field( $prize_video_id , array(
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
  $site_options->add_group_field( $prize_video_id , array(
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

  // Social Media variables

  $site_options->add_field( array(
    'name'    => esc_html__( 'Social Media', 'cmb2' ),
    'desc'    => esc_html__( 'Urls and accounts for different social media platforms. For use in menus and metadata', 'cmb2' ),
    'id'      => $prefix . 'socialmedia_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Facebook Page URL', 'cmb2' ),
    'id'      => 'socialmedia_facebook_url',
    'type'    => 'text',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Twitter Account Handle', 'cmb2' ),
    'id'      => 'socialmedia_twitter',
    'type'    => 'text',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Instagram Account Handle', 'cmb2' ),
    'id'      => 'socialmedia_instagram',
    'type'    => 'text',
  ) );

  // Metadata options

  $site_options->add_field( array(
    'name'    => esc_html__( 'Metadata options', 'cmb2' ),
    'desc'    => esc_html__( 'Settings relating to open graph, facebook and twitter sharing, and other social media metadata', 'cmb2' ),
    'id'      => $prefix . 'og_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Open Graph default image', 'cmb2' ),
    'desc'    => esc_html__( 'primarily displayed on Facebook, but other locations as well', 'cmb2' ),
    'id'      => 'og_image',
    'type'    => 'file',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Logo for SEO results', 'cmb2' ),
    'desc'    => esc_html__( 'presentation logo for this site (optional)', 'cmb2' ),
    'id'      => 'metadata_logo',
    'type'    => 'file',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Facebook App ID', 'cmb2' ),
    'desc'    => esc_html__( '(optional)', 'cmb2' ),
    'id'      => 'og_fb_app_id',
    'type'    => 'text',
  ) );

  // Analytics

  $site_options->add_field( array(
    'name'    => esc_html__( 'Analytics', 'cmb2' ),
    'desc'    => esc_html__( 'Settings for analytics', 'cmb2' ),
    'id'      => $prefix . 'analytics_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Google Analytics Tracking ID', 'cmb2' ),
    'desc'    => esc_html__( '(optional)', 'cmb2' ),
    'id'      => 'google_analytics_id',
    'type'    => 'text',
  ) );

  // Zip Code API options
  $site_options->add_field( array(
    'name'    => esc_html__( 'Zip Code API Options', 'cmb2' ),
    'desc'    => esc_html__( '', 'cmb2' ),
    'id'      => $prefix . 'zipcode_api_title',
    'type'    => 'title',
  ) );

  $site_options->add_field( array(
    'name'    => esc_html__( 'Zip Code API Key', 'cmb2' ),
    'id'      => 'zipcode_api_key',
    'type'    => 'text',
  ) );
}
