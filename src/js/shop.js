/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */
import Client from 'shopify-buy';
import Cookies from 'js-cookie';

class Shop {
  constructor() {
    this.mobileThreshold = 601;

    $(window)
      .resize(this.onResize.bind(this)) // Bind resize
      .on('ajaxSuccess', this.onReady.bind(this)); // Bind ajaxSuccess (custom event, comes from Ajaxy)

    $(document).ready(this.onReady.bind(this));

  }

  onResize() {
  }

  onReady() {

    // Check shopify api data
    if(WP.shopify) {
      const { domain, storefrontAccessToken } = WP.shopify;

      // Init Shopify client
      this.client = Client.buildClient({
        domain,
        storefrontAccessToken,
      });

      this.initCheckout();

      if ($('.single-product').length) { // Single product page
        this.initSingleProduct();
      }

      if ($('#cart-container').length) { // Cart is present
        this.initCartSection();
      }

    } else {
      console.error('Shopify URL and/or token missing');
    }
  }

  /**
   * Init the Shopify checkout, current or new
   */
  initCheckout() {

    // Get cart link DOM elements
    this.$cartLink = $('#cart-link');
    this.$cartCounter = $('#cart-counter');

    // Get shopifyCheckoutId from cookies
    const checkoutId = Cookies.get('shopifyCheckoutId');

    // If shopifyCheckoutId already exists (means there was already a cart initiated before)
    if (checkoutId) {

      // Fetch existing checkout by its checkoutId
      this.client.checkout.fetch(checkoutId)
        .then(checkout => {
          // Do something with the checkout
          // console.log('EXISTING CHECKOUT', checkout);

          // Save the checkout in object
          this.checkout = checkout;

          // Update cart display
          this.updateCart(checkout);

        }).catch( error => {
          console.log(error);
        });

    } else { // Non existing checkout

      // Create an empty checkout
      this.client.checkout.create()
        .then((checkout) => {
          // Do something with the checkout
          // console.log('EMPTY CHECKOUT CREATED', checkout);

          // Save checkout in object
          this.checkout = checkout;

          // Save the shopifyCheckoutId in a cookie
          Cookies.set('shopifyCheckoutId', checkout.id, { expires: 7 }); // Expires in 7 days
        });
    }
  }


  initSingleProduct() {
    this.productHandle = $('#shopify-handle').attr('data-shopify-handle');

    if (this.productHandle) {
      this.fetchProductMeta(this.productHandle);
    }
  }

  initCartSection() {
    // Get DOM elements
    this.$itemsContainer = $('#items-container');
    this.$checkoutContainer = $('#checkout-container');
    this.$subtotalContainer = $('subtotal-container');

    // Bind functions
    this.handleCartQuantity = this.handleCartQuantity.bind(this); // Bind the quantity selector
    this.handleRemoveItems = this.handleRemoveItems.bind(this); // Bind remove item button
  }

  /**
   * Fetch a product data from shopiy
   * @param {string} productHandle - The product handle
   */
  fetchProductMeta(productHandle) {
    // Fetch data from shopify. Returns a promise
    this.client.product.fetchByHandle(productHandle)
      .then(product => {

        // Get DOM elements
        this.$price = $('.single-product-price');
        this.$quantitySelect = $('#quantity');
        this.$quantityLabel = $('#quantity-select-label');
        this.$variationSelect = $('#variation-select');
        this.$variationLabel = $('#variation-select-label');

        // Display price
        this.showPrice(product, this.$price);

        // Generate variation selector
        this.generateSelector(product, this.$variationSelect, this.$variationLabel);

        // Bind functions
        this.handleAddToCart = this.handleAddToCart.bind(this);
        $('.add-to-cart').on('click', this.handleAddToCart); // Bind AddToCart button

      })
      .catch( error => {
        console.log(error);
      });
  }

  /**
   * Update cart
   * @param {object} checkout - The updated shopify checkout object
   */
  updateCart(checkout) {
    const { lineItems, webUrl, subtotalPrice } = checkout;

    // Update cart items in header
    this.$cartCounter.html(lineItems.length);

    // Update page Cart content
    if ($('#cart-container').length) {
      this.clearCartMarkup();
      this.generateCartItemsRow(lineItems);
      this.bindCartInputs(lineItems);
      this.generateCheckout(webUrl);
      this.generateSubtotal();
      this.updateSubtotal(subtotalPrice);

      this.$removeItem = $('.remove-item');
      this.bindRemoveItems();
    }
  }

  clearCartMarkup() {
    this.$itemsContainer.html('');
    this.$subtotalContainer.html('');
    this.$checkoutContainer.html('');
  }

  /**
   * Show price in an DOM element
   * @param {object} product - Shopify product object
   * @param {object} $element - jQuery DOM object to update
   */
  showPrice(product, $element) {
    // Update the element with the price of the first variant
    $element.html('$ ' + product.attrs.variants[0].price);
  }

  handleAddToCart() {
    const itemsToAdd = this.getQuantityAndVariant();

    // Add an item to the checkout in shopify
    this.client.checkout.addLineItems(this.checkout.id, [itemsToAdd])
      .then((checkout) => {
        // Do something with the updated checkout

        // Update the cart with the updated checkout
        this.updateCart(checkout);
      })
      .catch( error => {
        console.log(error);
      });
  }

  /*
   * Generate cart items rows markup
   * @param {object} items - Shopify items object
   */
  generateCartItemsRow(items) {
    if (items.length) {
      items.map( item => {
        //console.log(item);

        const image =  item.image ?  `<img alt="${item.title}" src="${item.image}" />` : ``;

        this.$itemsContainer.append(`
          <div class="grid-row   ">
            <div class="grid-item item-s-12 item-m-4 text-align-center">
              <h1 class="font-uppercase">${item.title}</h1>
              ${image}
            </div>
            <div class="grid-item item-s-2 item-m-1 text-align-center">
              <input class="cart-item-quantity text-align-center" type="number" value="${item.attrs.quantity.value}" data-product-id="${item.id}" />
            </div>
            <div class="grid-item item-s-3 item-m-3 text-align-center">
              <span class="font-uppercase">${item.variant.title}</span>
            </div>
            <div class="grid-item item-s-3 item-m-2 text-align-center">
              <span class="font-uppercase">$${item.variant.price}</span>
            </div>
            <div class="grid-item item-s-3 item-m-2 text-align-center">
              <a class="remove-item font-uppercase u-pointer" data-product-id="${item.id}" >Remove Item</span>
            </div>
          </div>
        `);
      });
    } else {
      this.$itemsContainer.append(`
        <div class="grid-row">
          <div class="grid-item item-s-12 text-align-center">
            <h1>Cart is empty</h1>
            <p>Please visit our <a href="/shop">Shop</p>
          </div>
        </div>
      `);
    }
  }

  generateCheckout(checkoutUrl) {
    this.$checkoutContainer.append(`<a href="${checkoutUrl}">Proceed to Checkout</a>`);
  }

  generateSubtotal() {
    this.$subtotalContainer.append(`
      <div class="grid-item item-s-12 text-align-center">
        <p>Subtotal: $<span id="subtotal"></span></p>
      </div>
    `);
  }

  updateSubtotal(price) {
    $('#subtotal').text(price);
  }

  bindCartInputs() {
    $('.cart-item-quantity').on('change', this.handleCartQuantity);
  }

  handleCartQuantity(event) {
    const productId =  event.target.dataset.productId;
    const quantity = parseInt(event.target.value);

    const productToUpdate = {
      id: productId,
      quantity,
    };

    // Update the line item on the checkout (change the quantity or variant)
    this.client.checkout.updateLineItems(this.checkout.id, [productToUpdate])
      .then((checkout) => {
        // Do something with the updated checkout
        console.log(checkout); // Quantity of line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' updated to 2
        this.updateSubtotal(checkout.subtotalPrice);
    });
  }

  generateSelector(product, $select, $label) {
    let label;

    product.variants.map( option => {
      const value = option.selectedOptions.map( option => option.value).join(' - ');
      const variantId = option.id;
      label = option.selectedOptions[0].name;
      $select.append(`<option value=\"${variantId}\">${value}</option>`);
    });

    $label.html(label);
  }

  bindRemoveItems() {
    this.$removeItem.on('click', this.handleRemoveItems);
  }

  handleRemoveItems(event) {
    const productId =  event.target.dataset.productId;

    this.client.checkout.removeLineItems(this.checkout.id, [productId]).then( checkout => {
      this.updateCart(checkout);
    });
  }


  getQuantityAndVariant() {
    const variantId = this.$variationSelect.val();
    const quantity = parseInt(this.$quantitySelect.val());

    // Has to be an array
    return({
      variantId,
      quantity,
    });
  }
}

export default Shop;
