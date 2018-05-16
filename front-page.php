<?php
get_header();

if (have_posts()) {
  while (have_posts()) {
    the_post();

    $video = get_post_meta($post->ID, '_igv_home_video_group', true);
    $recipe = get_post_meta($post->ID, '_igv_home_recipe', true);
    $bottle_image = get_post_meta($post->ID, '_igv_home_bottle_image_id', true);
    $fallback_image = get_post_meta($post->ID, '_igv_home_video_award_fallback_image_id', true);
    $options = get_site_option('_igv_site_options');
?>

<main class="main-content">
  <div class="container">
    <div class="grid-row">

      <div class="grid-item item-s-12 item-m-6 no-gutter grid-column">
      <?php
        if (!empty($video)) {
      ?>
        <div class="grid-item no-gutter covervid-wrapper height-s-33vw height-m-16vw">
          <video class="covervid-video" muted autoplay loop poster="<?php echo $video[0]['poster']; ?>">
            <source src="<?php echo $video[0]['webm']; ?>" type="video/webm">
            <source src="<?php echo $video[0]['mp4']; ?>" type="video/mp4">
          </video>
        </div>
      <?php
        }
      ?>
        <div class="grid-item grid-item-square grid-row align-items-end background-cover bg-front-bottle">
          <?php
          if (!empty($bottle_image)) {
            responsive_background_styles('bg-front-bottle', $bottle_image , array('320x320','640x640','960x960'));
          }
          ?>
          <div class="font-size-large grid-item item-s-12 item-m-10 offset-m-1 no-gutter margin-bottom-large">a vodka company founded with the sole intention of supporting alternative arts.</div>
          <div id="bottle-sprite"></div>
        </div>
      <?php
        $locate_page = get_page_by_path('locate');

        if(!empty($locate_page)) {
          $locate_image = get_post_meta($locate_page->ID, '_igv_locate_home_image_id', true);
      ?>
        <div class="grid-item no-gutter grid-row">
        <?php
          if (!empty($locate_image)) {
        ?>
          <div class="grid-item item-s-4 item-m-6 background-cover bg-front-locate">
            <?php
            responsive_background_styles('bg-front-locate', $locate_image, array('320x320','640x640','960x960'));
            ?>
          </div>
          <div class="grid-item item-s-8 item-m-6 margin-top-basic">
        <?php
          } else {
        ?>
          <div class="grid-item item-s-12 margin-top-basic">
        <?php
          }
        ?>
            <h2 class="margin-bottom-basic font-size-mid font-outline font-uppercase">Find it near you</h2>
            <?php get_template_part('partials/zip-code-form'); ?>
            <?php get_template_part('partials/stockists-container'); ?>
          </div>
        </div>
      <?php
        }

        if (!empty($recipe)) {
      ?>
        <a class="grid-item background-cover font-uppercase flex-grow bg-front-recipe padding-top-small padding-bottom-small mobile-min-height" href="<?php echo home_url('recipes'); ?>">
          <?php
          $recipe_image = get_post_thumbnail_id($recipe);
          responsive_background_styles('bg-front-recipe', $recipe_image , array('320x320','640x640','960x960'));
          ?>
          <h2 class="font-size-large font-outline">Cocktail Recipes</h2>
          <span><?php echo get_the_title($recipe); ?></span>
        </a>
      <?php
        }
      ?>
      </div>

      <div class="grid-item item-s-12 item-m-6 no-gutter grid-column">
      <?php
        $args = array(
          'post_type' => 'video-award',
          'posts_per_page' => '1',
        );

        // The Query
        $video_award_query = new WP_Query( $args );

        // The Loop
        if ( $video_award_query->have_posts() ) {
          while ( $video_award_query->have_posts() ) {
            $video_award_query->the_post();

      ?>
        <a class="grid-item grid-item-square background-cover font-uppercase bg-front-video-award padding-top-small padding-bottom-small" href="<?php echo home_url('videos'); ?>">
          <?php
          $video_award_image =  get_post_thumbnail_id(get_the_ID());
          responsive_background_styles('bg-front-video-award', $video_award_image, array('320x320','640x640','960x960'));
          ?>
          <h2 class="font-size-large font-outline"><?php the_title(); ?></h2>
          <span>Video Award Recipient <?php the_date('F Y'); ?></span>
        </a>
      <?php
        	}
        } else if (!empty($fallback_image)) {
      ?>
        <div class="grid-item grid-item-square background-cover bg-fallback-image">
          <?php
          responsive_background_styles('bg-fallback-image', $fallback_image, array('320x320','640x640','960x960'));
          ?>
        </div>
      <?php
        }

        wp_reset_postdata();

        $args = array(
          'post_type' => 'prize-winner',
          'posts_per_page' => '1',
          'orderby' => 'meta_value',
          'meta_key' => '_igv_prize_winner_year',
          'order' => 'DESC',
        );

        // The Query
        $prize_winner_query = new WP_Query( $args );

        // The Loop
        if ( $prize_winner_query->have_posts() ) {
          while ( $prize_winner_query->have_posts() ) {
            $prize_winner_query->the_post();

            $year = get_post_meta($post->ID, '_igv_prize_winner_year', true);
      ?>
        <a class="grid-item grid-item-square background-cover font-uppercase bg-front-prize-winner padding-top-small padding-bottom-small" href="<?php echo home_url('prize'); ?>">
          <?php
          $prize_winner_image =  get_post_thumbnail_id($post->ID);
          responsive_background_styles('bg-front-prize-winner', $prize_winner_image, array('320x320','640x640','960x960'));
          ?>
          <h2 class="font-size-large font-outline"><?php the_title(); ?></h2>
          <span><?php echo !empty($year) ? 'Material Prize Recipient ' . $year : ''; ?></span>
        </a>
      <?php
          }
        }

        wp_reset_postdata();
      ?>
        <?php get_template_part('partials/mailinglist-half'); ?>
      </div>
    </div>
  </div>

  <?php get_template_part('partials/footer-content'); ?>
</main>

<?php
  }
}

get_footer();
?>
