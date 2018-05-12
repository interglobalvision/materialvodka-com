<?php
get_header();
?>

<main id="main-content">
  <section id="posts">
    <div class="container">

      <div class="grid-row padding-top-mid padding-bottom-basic">
        <div class="grid-item item-s-12 item-m-6">
          <h1 class="font-uppercase font-size-large font-bold font-outline">Cocktail Recipes</h1>
        </div>
        <div class="grid-item item-s-12 item-m-3 item-l-2">
          <span>Material works with Arley Marks of Honey’s to invent the most tasty recipes.</span>
        </div>
      </div>

<?php
if (have_posts()) {

  $season_slugs = get_ordered_season_array();

  foreach ($season_slugs as $slug) {
    $args = array(
      'post_type' => 'recipe',
      'posts_per_page' => -1,
      'tax_query' => array(
        array(
          'taxonomy' => 'season',
          'field'    => 'slug',
          'terms'    => $slug,
        ),
      ),
    );

    // The Query
    $query = new WP_Query( $args );

    // The Loop
    if ( $query->have_posts() ) {
?>
      <div class="grid-row padding-top-basic padding-bottom-basic">
        <div class="grid-item item-s-12">
          <h2 class="font-uppercase"><?php echo $slug; ?></h2>
        </div>
      </div>
      <div class="grid-row padding-bottom-basic">
<?php
      while ( $query->have_posts() ) {
        $query->the_post();

        $ingredients = get_post_meta($post->ID, '_igv_ingredients_group', true);

        $bg_class = get_background_class($post->ID);
        $bg_image = get_post_thumbnail_id($post->ID);

?>
        <div class="recipe-item cube-holder grid-item no-gutter item-s-12 item-m-4 item-l-3">

          <div class="cube-left cube-front background-cover grid-column <?php echo $bg_class; ?>">
            <div class="grid-item">
              <h3 class="font-size-mid padding-bottom-micro"><?php echo the_title(); ?></h3>
            <?php
              if (!empty($ingredients)) {
                $ingredients_string = '';
                $i = 1;

                // iterate through ingredients forming
                // comma separated string. leaving out
                // comma after last item
                foreach ($ingredients as $ingredient) {
                  $ingredients_string .= $ingredient['ingredient_text'];
                  $ingredients_string .= $i !== count($ingredients) ? ', ' : '';
                  $i++;
                }
            ?>
              <span><?php echo $ingredients_string; ?></span>
            <?php
              }
            ?>
            </div>
            <?php
              responsive_background_styles($bg_class, $bg_image, array('320', '640', '960', '1440'));
            ?>
          </div>

          <div class="recipe-details cube-right grid-column">
            <div class="grid-item">
              <h3 class="font-size-mid padding-bottom-basic"><?php echo the_title(); ?></h3>
              <?php
                if (!empty($ingredients)) {
              ?>
              <ul class="padding-bottom-small">
              <?php
                  foreach ($ingredients as $ingredient) {
              ?>
                <li class="ingredient-item"><?php echo $ingredient['quantity_text']; ?> <?php echo $ingredient['ingredient_text']; ?></li>
              <?php
                  }
              ?>
              </ul>
              <?php
                }
              ?>
              <?php the_content(); ?>
            </div>
          </div>

        </div>
<?php
      }
?>
      </div>
<?php
    }

    wp_reset_postdata();
  }
}
?>
      <div class="grid-row align-items-center justify-center">
        <div class="grid-item item-s-12 item-m-6 text-align-right">
          Special Events, Art Prize, Cocktail Recipes, etc.
        </div>
        <div class="grid-item item-s-12 item-m-6">
          <?php get_template_part('partials/mailinglist-form'); ?>
        </div>
      </div>
    </div>
  </section>
</main>

<?php
get_footer();
?>
