<?php
get_header();
?>
<main id="main-content">
  <section id="page">
    <div id="cart-container"class="container margin-bottom-basic">
      <div class="grid-row ">
        <div class="grid-item item-m-9 grid-row text-align-center">
          <div class="grid-item item-s-12 item-m-4">
            <span>Product</span>
          </div>
          <div class="grid-item item-s-12 item-m-1">
            <span>Quantity</span>
          </div>
          <div class="grid-item item-s-12 item-m-3">
            <span>Type</span>
          </div>
          <div class="grid-item item-s-12 item-m-2">
            <span>Price</span>
          </div>
          <div class="grid-item item-s-12 item-m-1">
          </div>
        </div>
        <div class="grid-item item-m-3">
        </div>
      </div>
      <div class="grid-row ">
        <div id="items-container" class="grid-item item-s-12 item-m-9 ">
        </div>
        <div class="grid-item item-s-12 item-m-3">
          <div id="subtotal-container" class="grid-item item-s-12 grid-row"></div>
          <div id="checkout-container" class="grid-item item-s-12 text-align-center"></div>
        </div>
      </div>
    </div>
  </section>

</main>

<?php
get_footer();
?>
