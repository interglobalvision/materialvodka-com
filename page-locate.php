<?php
get_header();
?>

<main class="main-content">
  <section id="locate">
    <div class="container">

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();

    $top_image = get_post_meta(get_the_ID(), '_igv_locate_top_image_id', true);
    $bottom_image = get_post_meta(get_the_ID(), '_igv_locate_bottom_image_id', true);
    $video = get_post_meta(get_the_ID(), '_igv_locate_video_group', true);
    $options = get_site_option('_igv_site_options');
?>
      <div class="grid-row">
        <div class="grid-item item-s-12 item-m-9 item-l-8 item-xl-6 no-gutter grid-row padding-top-mid">
          <div class="grid-item item-s-12">
            <h2 class="margin-bottom-basic font-uppercase font-outline font-size-large">Find it near you</h2>
          </div>
          <div class="grid-item item-s-12 item-m-6 padding-bottom-large">
            <?php get_template_part('partials/zip-code-form'); ?>
          </div>
          <div class="grid-item item-s-12 item-m-6">
            <?php get_template_part('partials/stockists-container'); ?>
          </div>
        </div>
      <?php
        if (!empty($top_image)) {
      ?>
        <div class="grid-item item-s-12 item-m-3 item-l-4 item-xl-6 background-cover locate-top-image">
          <?php
            responsive_background_styles('locate-top-image', $top_image, array('320x320', '640x640', '960x960'));
          ?>
        </div>
      <?php
        }
      ?>
      </div>

    <?php
      if (!empty($video)) {
    ?>
      <div class="grid-row">
        <div class="grid-item item-s-12 covervid-wrapper height-s-33vw height-m-28vw">
          <video class="covervid-video" muted autoplay loop poster="<?php echo !empty($video[0]['poster']) ?  $video[0]['poster'] : ''; ?>">
            <source src="<?php echo !empty($video[0]['webm']) ? $video[0]['webm'] : ''; ?>" type="video/webm">
            <source src="<?php echo !empty($video[0]['mp4']) ? $video[0]['mp4'] : ''; ?>" type="video/mp4">
          </video>
        </div>
      </div>
    <?php
      }
    ?>

      <div class="grid-row margin-bottom-basic">
        <div class="grid-item item-s-12">
          <h2 class="font-uppercase font-outline font-size-large margin-bottom-basic margin-top-mid">Ask for material</h2>
        </div>

<?php
    // NY
    $ny_query = get_stockists_by_city('ny');

    if ($ny_query->have_posts()) {
?>
        <div class="grid-item item-s-12 item-l-6 margin-bottom-basic">
          <h2 class="font-size-mid margin-bottom-small">NY</h2>
          <div class="text-columns text-columns-s-1 text-columns-m-2">
            <?php generate_stockists_list($ny_query); ?>
          </div>
        </div>
<?php
    }

    // LA
    $la_query = get_stockists_by_city('la');

    if ($la_query->have_posts()) {
?>
        <div class="grid-item item-s-12 item-l-3 margin-bottom-basic">
          <h2 class="font-size-mid margin-bottom-small">LA</h2>
          <?php generate_stockists_list($la_query); ?>
        </div>
<?php
    }

    // MIAMI
    $miami_query = get_stockists_by_city('miami');

    if ($miami_query->have_posts()) {
?>
        <div class="grid-item item-s-12 item-l-3 margin-bottom-basic">
          <h2 class="font-size-mid margin-bottom-small">MIAMI</h2>
          <?php generate_stockists_list($miami_query); ?>
        </div>
<?php
    }
?>
      </div>

      <div class="grid-row">
        <div class="grid-item item-s-12 item-m-6 background-cover locate-bottom-image">
          <?php
            responsive_background_styles('locate-bottom-image', $bottom_image, array('320', '640', '960'));
          ?>
        </div>
      <?php
        if (!empty($options['_igv_mailchimp_url'])) {
      ?>
        <div class="grid-item item-s-12 item-m-6 padding-top-small">
          <div class="font-size-mid">Special Events, Art Prize, Cocktail Recipes, etc.</div>
          <div class="grid-row justify-center">
            <div class="grid-item item-s-10 item-m-8 padding-top-mid padding-bottom-mid">
              <?php get_template_part('partials/mailinglist-form'); ?>
            </div>
          </div>
        </div>
      <?php
        }
      ?>
      </div>
<?php
  }
}
?>

    </div>
  </section>

  <?php get_template_part('partials/footer-content'); ?>
</main>

<?php
get_footer();
?>
