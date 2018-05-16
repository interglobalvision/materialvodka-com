<?php
get_header();
?>

<main id="main-content">
  <section id="vodka">
    <div <?php post_class('container'); ?> id="post-<?php the_ID(); ?>">

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
    $vodka_video = get_post_meta($post->ID, '_igv_vodka_video_group', true);
    $vodka_image = get_post_meta($post->ID, '_igv_vodka_image_id', true);
    $world_video = get_post_meta($post->ID, '_igv_world_video_group', true);
    $world_image = get_post_meta($post->ID, '_igv_world_image_id', true);
    $bottom_image = get_post_meta($post->ID, '_igv_vodka_bottom_image_id', true);
    $institution_list = get_post_meta($post->ID, '_igv_institution_list_textarea', true);

?>
  <?php
    if (!empty($vodka_video)) {
  ?>
    <div class="grid-row">
      <div class="grid-item item-s-12 covervid-wrapper height-s-33vw height-m-28vw">
        <video class="covervid-video" muted autoplay loop poster="<?php echo !empty($vodka_video[0]['poster']) ? $vodka_video[0]['poster'] : ''; ?>">
          <source src="<?php echo !empty($vodka_video[0]['webm']) ? $vodka_video[0]['webm'] : ''; ?>" type="video/webm">
          <source src="<?php echo !empty($vodka_video[0]['mp4']) ? $vodka_video[0]['mp4'] : ''; ?>" type="video/mp4">
        </video>
      </div>
    </div>
  <?php
    }
  ?>
    <div class="grid-row padding-top-mid padding-bottom-basic">
      <div class="grid-item item-s-12">
        <h1 class='font-uppercase font-size-large font-bold font-outline'>Material = Art</h1>
      </div>
    </div>

    <div class="grid-row">
      <div class="grid-item item-s-12 item-m-4 item-l-3 p-line-length padding-bottom-large">
        <?php the_content(); ?>
      </div>
    <?php
      if (!empty($vodka_image)) {
    ?>
      <div class="grid-item item-s-12 item-m-8 item-l-9 vodka-image background-repeat-x">
      <?php
        responsive_background_styles('vodka-image', $vodka_image, array('320', '640', '960'));
      ?>
      </div>
    <?php
      }
    ?>
    </div>

    <?php
      if (!empty($world_video)) {
    ?>
      <div class="grid-row">
        <div class="grid-item item-s-12 covervid-wrapper height-s-33vw height-m-28vw">
          <video class="covervid-video" muted autoplay loop poster="<?php echo !empty($world_video[0]['poster']) ? $world_video[0]['poster'] : ''; ?>">
            <source src="<?php echo !empty($world_video[0]['webm']) ? $world_video[0]['webm'] : ''; ?>" type="video/webm">
            <source src="<?php echo !empty($world_video[0]['mp4']) ? $world_video[0]['mp4'] : ''; ?>" type="video/mp4">
          </video>
        </div>
      </div>
    <?php
      }
    ?>

    <div class="grid-row">
      <div class="grid-item grid-column item-s-12 item-m-6 no-gutter justify-around">
        <div class="grid-item">
          <h2 class='font-uppercase text-align-center font-size-extra font-outline font-bold padding-top-mid padding-bottom-mid'>10% of all profits go to supporting the arts</h2>
        </div>

        <div class="grid-item no-gutter grid-row">
          <div class="grid-item item-s-12 item-m-6 padding-bottom-basic">
            <p class="font-size-mid">Material is woven into the framework of the creative community. We are members of our world and we actively support radical change.</p>
          </div>

          <div class="grid-item item-s-12 item-m-6 padding-bottom-basic text-max-width">
          <?php
            if (!empty($institution_list)) {
          ?>
            <p class="margin-bottom-micro">Some of the artists and cultural institutions we have worked with include:</p>
            <?php echo apply_filters('the_content', $institution_list); ?>
          <?php
            }
          ?>
            <p>Learn more about the <a class="link-underline" href="<?php echo home_url('prize'); ?>">Material Vodka Prize</a> and the <a class="link-underline" href="<?php echo home_url('videos'); ?>">Video Award</a></p>
          </div>
        </div>
      </div>

    <?php
      if (!empty($world_image)) {
    ?>
      <div class="grid-item item-s-12 item-m-6 background-cover world-image grid-item-square">
      <?php
        responsive_background_styles('world-image', $world_image, array('320x320', '640x640', '960x960'));
      ?>
      </div>
    <?php
      }
    ?>
    </div>

<?php
  }
} ?>

    <?php
      if (!empty($bottom_image)) {
    ?>
    <div class="grid-row">
      <div class="grid-item item-s-12 item-m-6 background-cover vodka-bottom-image">
        <?php
          responsive_background_styles('vodka-bottom-image', $bottom_image, array('320', '640', '960'));
        ?>
      </div>
      <?php get_template_part('partials/mailinglist-half'); ?>
    </div>
    <?php
      } else {
    ?>
      <?php get_template_part('partials/mailinglist-full'); ?>
    <?php
      }
    ?>

    </div>
  </section>
</main>

<?php
get_footer();
?>
