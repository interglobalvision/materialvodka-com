<?php
// Menu icons for Custom Post Types
// https://developer.wordpress.org/resource/dashicons/
function add_menu_icons_styles(){
?>

<style>
#menu-posts-stockist .dashicons-admin-post:before {
    content: '\f513';
}
</style>

<?php
}
add_action( 'admin_head', 'add_menu_icons_styles' );


//Register Custom Post Types
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
