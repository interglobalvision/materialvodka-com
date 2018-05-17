<?php
get_header();
?>

<main class="main-content">
  <div class="container">

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
?>
    <div class="grid-row padding-top-mid padding-bottom-basic">
      <div class="grid-item">
        <h2 class="font-uppercase font-size-large font-outline font-bold"><?php the_title(); ?></h2>
      </div>
    </div>
    <div class="grid-row margin-bottom-basic">
      <div class="grid-item item-s-10 item-m-6 text-max-width">
        <?php the_content(); ?>
      </div>
    <?php
      if (has_post_thumbnail()) {
    ?>
      <div class="grid-item item-s-2 item-m-6 bg-page background-cover">
        <?php
          responsive_background_styles('bg-page', get_post_thumbnail_id(), array('320x320','640x640','960x960','1440x1440','1920x1920'));
        ?>
      </div>
    <?php
      }
    ?>
    </div>
<?php
  }
}
?>

  <?php get_template_part('partials/footer-content'); ?>
</main>




<?php
get_footer();
?>
