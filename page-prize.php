<?php
get_header();
?>

<main class="main-content">
  <section id="prize" class="content-wrapper">
    <div class="container">

      <div class="grid-row padding-top-mid padding-bottom-basic">
        <div class="grid-item">
          <h2 class="font-uppercase font-size-large font-outline font-bold">Material Vodka Prize</h2>
        </div>
      </div>
      <div class="grid-row margin-bottom-basic">
        <div class="grid-item item-s-12 item-m-4 item-l-3 text-max-width">
          <p>A yearly no-strings-attached cash prize awarded to a progressive creator by an independant board of artists and curators.</p>
        </div>
        <div class="grid-item item-s-12 item-m-4 item-l-3 text-max-width">
          <p>The Material Prize is an invitation only prize selected by a small group of curators and artists. Material Vodka has no say in the decision of the winner or the nomination process.</p>
        </div>
      </div>

  <?php
  if (have_posts()) {
    while (have_posts()) {
      the_post();

      // Get prize video
      $prize_video = get_post_meta(get_the_ID(), '_igv_prize_video_group', true);
      if (!empty($prize_video)){
  ?>
      <div class="grid-row">
        <div class="grid-item item-s-12 covervid-wrapper height-s-33vw height-m-28vw">
          <video class="covervid-video" muted autoplay loop poster="<?php echo !empty($prize_video[0]['poster']) ? $prize_video[0]['poster'] : ''; ?>">
            <source src="<?php echo !empty($prize_video[0]['webm']) ? $prize_video[0]['webm'] : ''; ?>" type="video/webm">
            <source src="<?php echo !empty($prize_video[0]['mp4']) ? $prize_video[0]['mp4'] : ''; ?>" type="video/mp4">
          </video>
        </div>
      </div>
    <?php
      }

      $args = array(
        'post_type' => 'prize-winner',
        'posts_per_page' => -1,
        'meta_key' => '_igv_prize_winner_year',
        'orderby' => 'meta_value'
      );

      $prize_winners = new WP_Query($args);

      if ($prize_winners->have_posts()) {
  ?>
      <div class="grid-row padding-top-mid padding-bottom-basic">
        <div class="grid-item">
          <h2 class="font-uppercase font-size-large font-outline font-bold">Material Prize Recipients</h2>
        </div>
      </div>
      <div class="grid-row">
  <?php
        while ($prize_winners->have_posts()) {
          $prize_winners->the_post();

          $year = get_post_meta($post->ID, '_igv_prize_winner_year', true);
  ?>

        <div class="grid-item item-s-12 item-m-4 item-l-3 margin-bottom-basic">
        <?php
          if (has_post_thumbnail()) {
            $portrait_image_class = 'prize-portrait-bg-' . $post->ID;
        ?>
          <div class="prize-portrait <?php echo $portrait_image_class; ?> background-cover margin-bottom-small">
            <?php
              responsive_background_styles($portrait_image_class, get_post_thumbnail_id() , array('320x320','640x640','960x960','1440x1440','1920x1920'));
            ?>
          </div>
        <?php
          }
        ?>
          <div class="font-uppercase"><?php echo $year; ?> Prize</div>
          <h3 class="font-size-mid margin-bottom-small"><?php the_title(); ?></h3>
          <div class="text-max-width"><?php the_content(); ?></div>
        </div>

  <?php
        }
  ?>
      </div>
  <?php
      }
    }
  }
  ?>
    <?php get_template_part('partials/mailinglist-full'); ?>
    </div>
  </section>

  <?php get_template_part('partials/footer-content'); ?>
</main>




<?php
get_footer();
?>
