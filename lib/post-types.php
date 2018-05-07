<?php
// Menu icons for Custom Post Types
// https://developer.wordpress.org/resource/dashicons/
function add_menu_icons_styles(){
?>

<style>
#menu-posts-recipe .dashicons-admin-post:before {
  content: "\f232";
}
#menu-posts-stockist .dashicons-admin-post:before {
  content: '\f513';
}
#menu-posts-video_award .dashicons-admin-post:before {
  content: "\f235";
}

#menu-posts-product .dashicons-admin-post:before {
  content: "\f174";
}
</style>

<?php
}
add_action( 'admin_head', 'add_menu_icons_styles' );


//Register Product Post Types
add_action( 'init', 'register_cpt_product' );

function register_cpt_product() {

  $labels = array(
    'name' => _x( 'Products', 'product' ),
    'singular_name' => _x( 'Product', 'product' ),
    'add_new' => _x( 'Add New', 'product' ),
    'add_new_item' => _x( 'Add New Product', 'product' ),
    'edit_item' => _x( 'Edit Product', 'product' ),
    'new_item' => _x( 'New Product', 'product' ),
    'view_item' => _x( 'View Product', 'product' ),
    'search_items' => _x( 'Search Products', 'product' ),
    'not_found' => _x( 'No products found', 'product' ),
    'not_found_in_trash' => _x( 'No products found in Trash', 'product' ),
    'parent_item_colon' => _x( 'Parent Product:', 'product' ),
    'menu_name' => _x( 'Products', 'product' ),
  );

  $args = array(
    'labels' => $labels,
    'hierarchical' => false,

    'supports' => array( 'title', 'editor', 'thumbnail' ),

    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => 'merch',
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post'
  );

  register_post_type( 'product', $args );
}

//Register Custom Post Types

add_action( 'init', 'register_cpt_recipe' );

function register_cpt_recipe() {

  $labels = array(
    'name' => _x( 'Recipes', 'recipe' ),
    'singular_name' => _x( 'Recipe', 'recipe' ),
    'add_new' => _x( 'Add New', 'recipe' ),
    'add_new_item' => _x( 'Add New Recipe', 'recipe' ),
    'edit_item' => _x( 'Edit Recipe', 'recipe' ),
    'new_item' => _x( 'New Recipe', 'recipe' ),
    'view_item' => _x( 'View Recipe', 'recipe' ),
    'search_items' => _x( 'Search Recipes', 'recipe' ),
    'not_found' => _x( 'No recipes found', 'recipe' ),
    'not_found_in_trash' => _x( 'No recipes found in Trash', 'recipe' ),
    'parent_item_colon' => _x( 'Parent Recipe:', 'recipe' ),
    'menu_name' => _x( 'Recipes', 'recipe' ),
  );
  
  $args = array(
    'labels' => $labels,
    'hierarchical' => false,

    'supports' => array( 'title', 'editor', 'thumbnail' ),

    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post'
  );
  
  register_post_type( 'recipe', $args );
}

add_action( 'init', 'register_cpt_stockist' );

function register_cpt_stockist() {

  $labels = array(
    'name' => _x( 'Stockists', 'stockist' ),
    'singular_name' => _x( 'Stockist', 'stockist' ),
    'add_new' => _x( 'Add New', 'stockist' ),
    'add_new_item' => _x( 'Add New Stockist', 'stockist' ),
    'edit_item' => _x( 'Edit Stockist', 'stockist' ),
    'new_item' => _x( 'New Stockist', 'stockist' ),
    'view_item' => _x( 'View Stockist', 'stockist' ),
    'search_items' => _x( 'Search Stockists', 'stockist' ),
    'not_found' => _x( 'No stockists found', 'stockist' ),
    'not_found_in_trash' => _x( 'No stockists found in Trash', 'stockist' ),
    'parent_item_colon' => _x( 'Parent Stockist:', 'stockist' ),
    'menu_name' => _x( 'Stockists', 'stockist' ),
  );

  $args = array(
    'labels' => $labels,
    'hierarchical' => false,

    'supports' => array( 'title', 'editor', 'thumbnail' ),

    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post'
  );

  register_post_type( 'stockist', $args );
}

add_action( 'init', 'register_cpt_video_award' );

function register_cpt_video_award() {

  $labels = array(
    'name' => _x( 'Video Awards', 'video_award' ),
    'singular_name' => _x( 'Video Award', 'video_award' ),
    'add_new' => _x( 'Add New', 'video_award' ),
    'add_new_item' => _x( 'Add New Video Award', 'video_award' ),
    'edit_item' => _x( 'Edit Video Award', 'video_award' ),
    'new_item' => _x( 'New Video Award', 'video_award' ),
    'view_item' => _x( 'View Video Award', 'video_award' ),
    'search_items' => _x( 'Search Video Awards', 'video_award' ),
    'not_found' => _x( 'No Video Awards found', 'video_award' ),
    'not_found_in_trash' => _x( 'No Video Awards found in Trash', 'video_award' ),
    'parent_item_colon' => _x( 'Parent Video Award:', 'video_award' ),
    'menu_name' => _x( 'Video Awards', 'video_award' ),
  );

  $args = array(
    'labels' => $labels,
    'hierarchical' => false,

    'supports' => array( 'title', 'editor', 'thumbnail' ),

    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post'
  );
  
  register_post_type( 'video_award', $args );
}
