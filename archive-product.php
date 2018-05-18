<?php
get_header();
?>

<main class="main-content">
  <section id="shop" class="content-wrapper">
    <div class="container">
      <?php get_template_part('partials/shop-header'); ?>
      <div class="grid-row">

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
?>
        <article <?php post_class('grid-item item-s-12'); ?> id="post-<?php the_ID(); ?>">

          <a href="<?php the_permalink() ?>">
            <?php the_title(); ?>
            <?php the_post_thumbnail(); ?>
          </a>

        </article>

<?php
  }
}
?>

      </div>
      <?php get_template_part('partials/mailinglist-full'); ?>
    </div>
  </section>

  <?php get_template_part('partials/footer-content'); ?>

  <?php get_template_part('partials/cart'); ?>

</main>

<?php
get_footer();
?>
