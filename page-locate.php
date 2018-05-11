<?php
get_header();
?>

<main id="main-content">
  <section id="locate">
    <div class="container">

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();

    $top_image = get_post_meta(get_the_ID(), '_igv_locate_top_image_id', true);
    $bottom_image = get_post_meta(get_the_ID(), '_igv_locate_bottom_image_id', true);
    $video = get_post_meta(get_the_ID(), '_igv_locate_video_group', true);

?>
      <div class="grid-row">
        <div class="grid-item item-s-12 item-l-8 no-gutter grid-row">
          <div class="grid-item item-s-12">
            <h1 class="font-uppercase">Find it near you</h1>
          </div>
          <div class="grid-item item-s-12 item-l-6">
            <?php get_template_part('partials/zip-code-form'); ?>
          </div>
          <div class="grid-item item-s-12 item-l-6">
          </div>
        </div>
        <div class="grid-item item-s-12 item-l-4 background-cover locate-top-image">
          <?php
            responsive_background_styles('locate-top-image', $top_image, array('320x320', '640x640', '960x960'));
          ?>
        </div>
      </div>

    <?php
      if (!empty($video)) {
    ?>
      <div class="grid-row">
        <div class="grid-item item-s-12">
          <video autoplay loop muted poster="<?php echo !empty($video[0]['_igv_locate_video_poster']) ?  $video[0]['_igv_locate_video_poster'] : ''; ?>">
            <source src="<?php echo !empty($video[0]['_igv_locate_video_webm']) ? $video[0]['_igv_locate_video_webm'] : ''; ?>" type="video/webm">
            <source src="<?php echo !empty($video[0]['_igv_locate_video_mp4']) ? $video[0]['_igv_locate_video_mp4'] : ''; ?>" type="video/mp4">
          </video>
        </div>
      </div>
    <?php
      }
    ?>

      <div class="grid-row">
        <div class="grid-item item-s-12">
          <h2>Ask for material</h2>
        </div>

<?php
    // NY
    $ny_query = get_stockists_by_city('ny');
?>
        <div class="grid-item item-s-12 item-l-6">
          <h2>NY</h2>
          <div class="text-columns text-columns-s-1 text-columns-m-2">
            <?php generate_stockists_list($ny_query); ?>
          </div>
        </div>

<?php
    // LA
    $la_query = get_stockists_by_city('la');
?>
        <div class="grid-item item-s-12 item-l-3">
          <h2>LA</h2>
          <?php generate_stockists_list($la_query); ?>
        </div>

<?php
    // MIAMI
    $miami_query = get_stockists_by_city('miami');
?>
        <div class="grid-item item-s-12 item-l-3">
          <h2>Miami</h2>
          <?php generate_stockists_list($miami_query); ?>
        </div>
      </div>

      <div class="grid-row">
        <div class="grid-item item-s-12 item-l-6 background-cover locate-bottom-image">
          <?php
            responsive_background_styles('locate-bottom-image', $bottom_image, array('320', '640', '960'));
          ?>
        </div>
        <div class="grid-item item-s-12 item-l-6">
          <p>Newsletter goes here</p>
        </div>
      </div>
<?php
  }
}
?>

    </div>
  </section>
</main>

<?php
get_footer();
?>
