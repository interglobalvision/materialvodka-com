<?php
get_header();
?>

<main id="main-content">
  <section id="">
    <div class="container">
      

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

    $institution_list = get_post_meta(get_the_ID(), '_igv_institution_list_options', true);
    pr($institution_list);

?>

      <video autoplay loop muted poster="<?php echo $vodka_video['poster']; ?>">
          <source src="<?php echo $video['_igv_vodka_video_webm']; ?>" type="video/webm">
          <source src="<?php echo $video['_igv_vodka_video_mp4']; ?>" type="video/webm">
      </video>

      <h1 class='font-uppercase'>Material Vodka</h1>

      <?php echo get_post_field('post_content', $post->ID); ?>

      <div class="grid-item item-s-12 item-l-4" style="background-image: url(<?php echo $vodka_image; ?>)">

      <video autoplay loop muted poster="<?php echo $world_video['poster']; ?>">
          <source src="<?php echo $video['_igv_world_video_webm']; ?>" type="video/webm">
          <source src="<?php echo $video['_igv_world_video_mp4']; ?>" type="video/webm">
      </video>

      <h1 class='font-uppercase'>10% OF THE PROFITS GO TO SUPPORTING THE ARTS.</h1>

      <p>Material is woven into the framework of the creative community. We are members of our world and we actively support radical change.</p>

      <p>Some of the artists and cultural institutions we have worked with include:</p>

      <div class="grid-item item-s-12 item-l-4" style="background-image: url(<?php echo $world_image; ?>)">

      <article <?php post_class('grid-item item-s-12'); ?> id="post-<?php the_ID(); ?>">

        <a href="<?php the_permalink() ?>"><?php the_title(); ?></a>

        <?php the_content(); ?>

      </article>

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