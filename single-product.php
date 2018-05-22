<?php
get_header();
?>

<main class="main-content">
  <section id="single-product" class="content-wrapper">
    <div class="container">
    <?php get_template_part('partials/shop-header'); ?>
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();

    // Get shopify ID
    $shopify_product_handle = get_post_meta(get_the_ID(), '_igv_shopify_product_handle', true);

    // Get product gallery
    $product_gallery = get_post_meta(get_the_ID(), '_igv_product_gallery', true);
?>
    <?php
      // Output product handle
      if (!empty($shopify_product_handle)) {
    ?>
      <div id="shopify-handle" class="u-visuallyhidden" data-shopify-handle="<?php echo $shopify_product_handle; ?>"></div>
    <?php
      }
    ?>

      <article <?php post_class('grid-row'); ?> id="post-<?php the_ID(); ?>">
        <div class="grid-item item-s-12 item-m-6 no-gutter grid-row align-content-start">
          <div class="grid-item item-s-12 margin-bottom-mid text-max-width">

            <h1 class="font-uppercase font-size-mid margin-bottom-tiny"><?php the_title(); ?></h1>

            <?php the_content(); ?>

            <span class="single-product-price"></span>

          </div>

          <div class="grid-item item-s-12 padding-bottom-mid no-gutter grid-row align-content-start">
            <div id="product-options" class="grid-item item-s-12 no-gutter grid-row align-content-start">
              <div class="grid-item item-s-12 no-gutter grid-row margin-bottom-basic align-items-center">
                <div class="grid-item item-s-6 text-align-right">
                  <label id="quantity-select-label" for="quantity" class="font-size-small">QTY</label>
                </div>
                <div class="grid-item item-s-6">
                  <select id="quantity" class="quantity" name="quantity">
                    <?php
                    for($i = 1; $i <= 10; $i++) {
                      echo '<option value="' . $i . '">' . $i . '</option>';
                    }
                    ?>
                  </select>
                </div>
              </div>
            </div>

          <?php
            if (!empty($shopify_product_handle)) {
          ?>
            <div class="grid-item item-s-6 offset-s-6 padding-top-mid">
              <button class="add-to-cart button-no-padding font-uppercase">Add to cart</button>
            </div>
          <?php
            }
          ?>
          </div>
        </div>

      <?php
        if (!empty($product_gallery)) {
      ?>
        <div class="grid-item item-s-12 item-m-6 no-gutter">
          <div id="slick-carousel">
            <?php
              foreach($product_gallery as $id => $src) {
                echo wp_get_attachment_image($id, '1920', false, 'data-no-lazysizes=true');
              }
            ?>
          </div>
        </div>
      <?php
        }
      ?>

      </article>

<?php
  }
}

$args = array(
  'post_type' => 'product',
  'posts_per_page' => 4,
  'orderby' => 'rand',
  'post__not_in' => array($post->ID),
  'meta_key' => '_igv_shopify_product_handle',
);

$other_products_query = new WP_query($args);

if ($other_products_query->have_posts()) {
?>
      <?php get_template_part('partials/shop-other-header'); ?>
      <div class="grid-row">
<?php
  while ($other_products_query->have_posts()) {
    $other_products_query->the_post();
?>
        <!-- print product item -->
        <article <?php post_class('archive-product-item cube-holder grid-item no-gutter item-s-6'); ?> id="post-<?php the_ID(); ?>">
          <?php get_template_part('partials/archive-product-item'); ?>
        </article>
<?php
  }
?>
      </div>
<?php
}

wp_reset_postdata();
?>

      <?php get_template_part('partials/mailinglist-full'); ?>
    </div>
  </section>

  <?php get_template_part('partials/footer-content'); ?>

  <?php get_template_part('partials/cart'); ?>

</main>

<?php
get_footer();
?>
