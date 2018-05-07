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
add_action( 'cmb2_init', 'igv_cmb_metaboxes' );
function igv_cmb_metaboxes() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  /**
   * Metaboxes declarations here
   * Reference: https://github.com/WebDevStudios/CMB2/blob/master/example-functions.php
   */

}

add_action( 'cmb2_init', 'igv_cmb_metabox_recipe' );
function igv_cmb_metabox_recipe() {

  // Start with an underscore to hide fields from custom fields list
  $prefix = '_igv_';

  /**
   * Metaboxes declarations here
   * Reference: https://github.com/WebDevStudios/CMB2/blob/master/example-functions.php
   */

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
  'id'          => 'ingredients_group',
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
?>
