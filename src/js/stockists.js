/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, window, WP */

class Stockists {

  constructor() {

    // Bind global Events
    $(document).ready(this.onReady.bind(this));
    $(window).on('ajaxSuccess', this.onReady.bind(this)); // Bind ajaxSuccess (custom event, comes from Ajaxy)

    // Bind functions
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestGeolocation = this.requestGeolocation.bind(this);
    this.geoSuccess = this.geoSuccess.bind(this);
    this.geoError = this.geoError.bind(this);

    // Settings
    this.radius = 10; // in miles
  }

  onReady() {

    // Get DOM elements
    this.$stockistsContainer = $('#find-stockists-container');
    this.$zipCodeInput = $('#find-zip-code');
    this.$submitButton = $('#find-submit');
    this.$useGeolocationButton = $('#find-use-location');

    // Bind to events
    this.$submitButton.click(this.handleSubmit);
    this.$useGeolocationButton.click(this.requestGeolocation);

  }

  handleSubmit() {
    const zipcode = this.$zipCodeInput.val();

    if(zipcode !== '') {
      this.findStockists({zipcode});
    }
  }

  requestGeolocation() {
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
  }

  geoSuccess(position) {
    const { latitude, longitude } = position.coords;

    this.findStockists({
      coords: {
        longitude,
        latitude,
      }
    });

  }

  geoError(error) {
    console.log(error);
  }

  findStockists(location) {
    console.log(location);
  }
}

export default Stockists;
