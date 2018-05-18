<?php
get_header();
?>

<main class="main-content">
  <section id="single-product" class="content-wrapper">
    <div class="container">
  <?php get_template_part('partials/shop-header'); ?>
      <div class="grid-row">

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();

    // Get shopify ID
    $shopify_product_handle = get_post_meta(get_the_ID(), '_igv_shopify_product_handle', true);

    // Get product gallery
    $product_gallery = get_post_meta(get_the_ID(), '_igv_shopify_product_gallery', true);
?>

        <article <?php post_class('grid-item item-s-12 item-m-3'); ?> id="post-<?php the_ID(); ?>">

    <?php
    // Output product handle
    if (!empty($shopify_product_handle)) {
    ?>
          <div id="shopify-handle" class="u-visuallyhidden" data-shopify-handle="<?php echo $shopify_product_handle; ?>"></div>
    <?php
    }
    ?>

          <?php the_title(); ?>
          <?php the_content(); ?>
          <h3 class="single-product-price"></h3>

          <div>
            <label id="quantity-select-label" for="quantity">Quantity: </label>
            <select id="quantity" class="quantity" name="quantity">
  <?php
  for($i = 1; $i <= 10; $i++) {
    echo '<option value="' . $i . '">' . $i . '</option>';
  }
  ?>
            </select>
          </div>

          <div>
            <label id="variation-select-label" for="variation-select">Size: </label>
            <select id="variation-select" class="variation-select" name="variation-select">
            </select>
          </div>

          <button class="add-to-cart">Add to cart</button>


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

  <?php get_template_part('partials/cart'); ?>

</main>

<?php
get_footer();
?>
