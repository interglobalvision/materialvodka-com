<?php

function season_taxonomy() {

  register_taxonomy(
    'season',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
    'recipe',  //post type name
    array(
      'hierarchical' => true,
      'label' => 'Seasons',
      'query_var' => true,
    )
  );

  // Programatically create Seasons for Recipes
  $seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

  foreach ($seasons as $season) {
    wp_insert_term(
      $season,
      'season',
      array(
        'slug' => strtolower($season)
      )
    );
  }

}
add_action( 'init', 'season_taxonomy');

