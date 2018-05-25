<?php
get_header();
?>

<main class="main-content">
  <section id="shop" class="content-wrapper">
    <div class="container">
      <?php get_template_part('partials/shop-header'); ?>
      <!-- open main row -->
      <div class="grid-row">
<?php
if (have_posts()) {
  $shop_options = get_site_option('_igv_shop_options');
?>
        <!-- open product sub-row -->
        <div class="grid-item item-s-12 item-m-6 no-gutter grid-row">
          <!-- open product sub-sub-row -->
          <div class="grid-item item-s-12 no-gutter grid-row">
<?php
  while (have_posts()) {
    the_post();

    // Get shopify ID
    $shopify_product_handle = get_post_meta($post->ID, '_igv_shopify_product_handle', true);

    if (!empty($shopify_product_handle)) {
?>
            <!-- print product item -->
            <article <?php post_class('archive-product-item cube-holder grid-item no-gutter item-s-6'); ?> id="post-<?php the_ID(); ?>">
              <?php get_template_part('partials/archive-product-item'); ?>
            </article>
<?php
    } // end if shopify ID
    
    if ($wp_query->current_post === $wp_query->post_count - 1 || $wp_query->current_post === 3)  {
      // Its the last post
      // Or the 4th post

?>
          <!-- close product sub-sub-row -->
          </div>
        <!-- open product sub-row -->
        </div>

<?php
    }

    if ($wp_query->current_post === 3 || ($wp_query->current_post === $wp_query->post_count - 1 && $wp_query->post_count <= 4) && !empty($shop_options['_igv_shop_lookbook_image'])) {
      // Its the 4th post
      // or the last post & less than 4 total
      // means time for the big lookbook image

      $bg_image = $shop_options['_igv_shop_lookbook_image_id'];
      $bg_class = 'lookbook-bg-' . $bg_image;
?>
        <!-- open lookbook sub-row -->
        <div class="grid-item item-s-12 item-m-6 archive-product-lookbook-item background-cover <?php echo $bg_class; ?>">
          <?php
            responsive_background_styles($bg_class, $bg_image, array('320', '640', '960', '1440', '1920'));
          ?>
<?php
      if ($wp_query->current_post === 3 && $wp_query->current_post !== $wp_query->post_count - 1) {
        // We're on the 4th post with more to go
        // Close the lookbook sub-row
        // and open a new product sub-row
?>
      <!-- close lookbook sub-row -->
      </div>
      <!-- open product sub-row -->
      <div class="grid-item item-s-12 no-gutter grid-row">
        <!-- open product sub-sub-row -->
        <div class="grid-item item-s-12 item-m-6 no-gutter grid-row">
<?php
      } else if ($wp_query->current_post === $wp_query->post_count - 1) {
        // No more posts.
        // Close the lookbook row and we're done
?>
      <!-- close lookbook sub-row -->
      </div>
<?php
      }
    }

    else if ($wp_query->current_post % 2 !== 0 && $wp_query->current_post !== $wp_query->post_count - 1) {
      // An even post, but not the last post

      $item_size_class = $wp_query->current_post < 3 ? 'item-s-12' : 'item-s-12 item-m-6';
?>
        <!-- close product sub-sub-row -->
        </div>
        <!-- open product sub-sub-row -->
        <div class="grid-item <?php echo $item_size_class; ?> no-gutter grid-row">
<?php
    } // end if
  } // end while
?>
<?php
} // end if
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
