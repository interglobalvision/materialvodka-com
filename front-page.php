<?php
get_header();

if (have_posts()) {
  while (have_posts()) {
    the_post();

    $video = get_post_meta($post->ID, '_igv_home_video_group', true);
    $recipe = get_post_meta($post->ID, '_igv_home_recipe', true);
    $options = get_site_option('_igv_site_options');
?>

<main id="main-content">
  <div class="container">
    <div class="grid-row">

      <div class="grid-item item-s-12 item-m-6 no-gutter grid-column">
      <?php
        if (!empty($video)) {
      ?>
        <div class="grid-item no-gutter covervid-wrapper
        covervid-s-12 covervid-m-6">
          <video class="covervid-video" muted autoplay loop poster="<?php echo $video[0]['poster']; ?>">
            <source src="<?php echo $video[0]['webm']; ?>" type="video/webm">
            <source src="<?php echo $video[0]['mp4']; ?>" type="video/mp4">
          </video>
        </div>
      <?php
        }
      ?>
        <div class="grid-item grid-item-square grid-row align-items-end">
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
            $image_src = wp_get_attachment_image_src($locate_image, 'full');
        ?>
          <div class="grid-item item-s-6 background-cover" style="background-image: url(<?php echo $image_src[0];  ?>)"></div>
          <div class="grid-item item-s-6 margin-top-basic">
        <?php
          } else {
        ?>
          <div class="grid-item item-s-12 margin-top-basic">
        <?php
          }
        ?>
            <div class="margin-bottom-basic font-size-mid">Find it near you</div>
            <form class="margin-bottom-basic">
              <input type="number" placeholder="ZIP CODE" />
              <input type="submit" value="FIND VODKA" />
            </form>
            <div class="margin-bottom-basic">OR</div>
            <button class="margin-bottom-basic">Use your location</button>
          </div>
        </div>
      <?php
        }

        if (!empty($recipe)) {
      ?>
        <a class="grid-item background-cover font-uppercase flex-grow" href="<?php echo home_url('recipes'); ?>" style="background-image: url(<?php echo get_the_post_thumbnail_url($recipe, 'full'); ?>)">
          <h2 class="font-size-mid">Cocktail Recipes</h2>
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
        $query = new WP_Query( $args );

        // The Loop
        if ( $query->have_posts() ) {
          while ( $query->have_posts() ) {
            $query->the_post();
      ?>
        <div class="grid-item grid-item-square background-cover font-uppercase" href="<?php echo home_url('videos'); ?>" style="background-image: url(<?php echo the_post_thumbnail_url('full'); ?>)">
          <h2 class="font-size-large"><?php the_title(); ?></h2>
          <span>Video Award Recipient <?php the_date('F Y'); ?></span>
        </div>
      <?php
        	}
        }

        wp_reset_postdata();
      ?>
        <div class="grid-item grid-item-square background-cover font-uppercase" href="<?php echo home_url('prize'); ?>">
          <h2 class="font-size-large">Prize Winner's Name</h2>
          <span>Material Prize Recipient YEAR</span>
        </div>
      <?php
        if (!empty($options['_igv_mailinglist_embed'])) {
      ?>
        <div class="grid-item">
          <div class="font-size-mid">Special Events, Art Prize, Cocktail Recipes, etc.</div>
          <div class="grid-row">
            <div class="grid-item item-s-12 item-m-8 offset-m-2 padding-top-mid padding-bottom-mid">
              <?php get_template_part('partials/mailinglist-form'); ?>
            </div>
          </div>
        </div>
      <?php
        }
      ?>
      </div>

    </div>
  </div>
</main>

<?php
  }
}

get_footer();
?>
