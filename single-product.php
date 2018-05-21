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
    $product_gallery = get_post_meta(get_the_ID(), '_igv_shopify_product_gallery', true);
?>

      <article <?php post_class('grid-row'); ?> id="post-<?php the_ID(); ?>">
    <?php
    // Output product handle
    if (!empty($shopify_product_handle)) {
    ?>
        <div id="shopify-handle" class="u-visuallyhidden" data-shopify-handle="<?php echo $shopify_product_handle; ?>"></div>
    <?php
    }
    ?>
        <div class="grid-item item-s-12 item-m-4">

          <h1 class="font-uppercase font-size-mid"><?php the_title(); ?></h1>

          <?php the_content(); ?>

          <span class="single-product-price"></span>

        </div>

        <div class="grid-item item-s-12 item-m-8 padding-top-mid padding-bottom-mid">

          <div>
            <label id="quantity-select-label" for="quantity">QTY</label>
            <select id="quantity" class="quantity" name="quantity">
  <?php
  for($i = 1; $i <= 10; $i++) {
    echo '<option value="' . $i . '">' . $i . '</option>';
  }
  ?>
            </select>
          </div>

          <div id="product-options"></div>

          <button class="add-to-cart button-no-padding">Add to cart</button>
        </div>

      </article>

<?php
  }
}
?>

      <?php get_template_part('partials/shop-other-header'); ?>

      <?php get_template_part('partials/mailinglist-full'); ?>
    </div>
  </section>

  <?php get_template_part('partials/footer-content'); ?>

  <?php get_template_part('partials/cart'); ?>

</main>

<?php
get_footer();
?>
