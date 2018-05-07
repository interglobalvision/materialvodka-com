<?php

function season_taxonomy() {  
  register_taxonomy(  
    'season',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces). 
    'recipe',  //post type name
    array(  
      'hierarchical' => true,  
      'label' => 'Seasons',  //Display name
      'query_var' => true,
    )  
	);  
}  
add_action( 'init', 'season_taxonomy');

