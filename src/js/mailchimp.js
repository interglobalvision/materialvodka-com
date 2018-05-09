/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

class Mailchimp {
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

  }

}

export default Mailchimp;
