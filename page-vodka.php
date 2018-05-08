<?php
get_header();
?>

<main id="main-content">
  <section id="">
    <div <?php post_class('container'); ?> id="post-<?php the_ID(); ?>">
    

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
    $vodka_video = get_post_meta(get_the_ID(), '_igv_vodka_video_group', true);
    $vodka_video = $vodka_video[0];
    pr($vodka_video);

    $vodka_image = get_post_meta(get_the_ID(), '_igv_vodka_image', true);
    pr($vodka_image);

    $world_video = get_post_meta(get_the_ID(), '_igv_world_video_group', true);
    $world_video = $world_video[0];
    pr($world_video);

    $world_image = get_post_meta(get_the_ID(), '_igv_world_image', true);
    pr($world_image);

    $institution_list = get_post_meta(get_the_ID(), '_igv_institution_list_textarea', true);
    pr($institution_list);

?>
    <div class="grid-row">
      <div class="grid-item item-s-12">
        <video autoplay loop muted poster="<?php echo $vodka_video['poster']; ?>">
          <source src="<?php echo $video['_igv_vodka_video_webm']; ?>" type="video/webm">
          <source src="<?php echo $video['_igv_vodka_video_mp4']; ?>" type="video/webm">
        </video>
      </div>
    </div>
    
    <div class="grid-row">
      <div class="grid-item item-s-12">
        <h1 class='font-uppercase'>Material Vodka</h1>
      </div>
    </div>
    
    <div class="grid-row">
      <div class="grid-item item-s-12 item-l-3">
        <?php the_content(); ?>
      </div>
      <div class="grid-item item-s-12 item-l-9" style="background-image: url(<?php echo $vodka_image; ?>)"></div>
    </div>
    
    <div class="grid-row">
      <div class="grid-item item-s-12">
        <video autoplay loop muted poster="<?php echo $world_video['poster']; ?>">
          <source src="<?php echo $video['_igv_world_video_webm']; ?>" type="video/webm">
          <source src="<?php echo $video['_igv_world_video_mp4']; ?>" type="video/webm">
        </video>
      </div>
    </div>
  
    <div class="grid-row">
      <div class="grid-item item-s-12 item-l-6">
        <h1 class='font-uppercase'>10% OF THE PROFITS GO TO SUPPORTING THE ARTS.</h1>

        <p>Material is woven into the framework of the creative community. We are members of our world and we actively support radical change.</p>

        <p>Some of the artists and cultural institutions we have worked with include:</p>

        <?php echo ( $institution_list ); ?>

        <div class="grid-item item-s-12 item-l-4" style="background-image: url(<?php echo $world_image; ?>)"></div>
      </div>
    </div>


<?php
  }
} else {
?>
        <article class="u-alert grid-item item-s-12"><?php _e('Sorry, no posts matched your criteria :{'); ?></article>
<?php
} ?>

      </div>
    </div>
  </section>

  <?php get_template_part('partials/pagination'); ?>

</main>

<?php
get_footer();
?>