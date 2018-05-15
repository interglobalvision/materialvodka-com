/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, window, WP */

import { geo2zip } from 'geo2zip';

class Stockists {

  constructor() {

    // Bind global Events
    $(document).ready(this.onReady.bind(this));
    $(window).on('ajaxySuccess', this.onReady.bind(this)); // Bind ajaxSuccess (custom event, comes from Ajaxy)

    // Bind functions
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestGeolocation = this.requestGeolocation.bind(this);
    this.geoSuccess = this.geoSuccess.bind(this);
    this.geoError = this.geoError.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
    this.outputMessage = this.outputMessage.bind(this);

  }

  onReady() {
    // Get the stockists container (our main element and check)
    this.$stockistsContainer = $('#find-stockists-container');

    if(this.$stockistsContainer.length) {

      // Get the rest of DOM elements
      this.$zipCodeInput = $('#find-zip-code');
      this.$submitButton = $('#find-submit');
      this.$useGeolocationButton = $('#find-use-location');

      // Bind to events
      this.$submitButton.click(this.handleSubmit);
      this.$useGeolocationButton.click(this.requestGeolocation);
    }

  }

  handleSubmit(event) {
    event.preventDefault();

    // Get input value (parsed as int)
    const zipcode = parseInt(this.$zipCodeInput.val());

    // Check our zipcode is exactly 5 digits
    if(zipcode.toString().length !== 5) {
      this.outputError('Please provide a valid zipcode');
    } else {
      this.findStockists(zipcode);
    }
  }

  requestGeolocation() {
    // Set loading message
    this.outputMessage('Requesting your geolocation...');

    // Request browser geolocation
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
  }

  geoSuccess(position) {
    // Get lat/lng
    const { latitude, longitude } = position.coords;

    // Convert lat/lng to zipcode
    geo2zip({ longitude, latitude })
      .then(zip => {
        this.findStockists(zip);
      })
      .catch(e => {
        this.outputError();
      });

  }

  geoError(error) {
    this.outputMessage('We cound\'t retrive your geolocation :(');
  }

  findStockists(zip) {
    // Set loading message
    this.outputMessage('Finding Stockists...');

    // Make a request to find the nearest stockists
    $.ajax(WP.siteUrl + `/wp-json/igv/find-stockists/${zip}`, {
      dataType: 'json',
      error: this.handleError,
      success: this.handleSuccess,
    });
  }

  // Handle successful requests
  handleSuccess(data) {
    // If success is false, it means no other zipcodes where found
    // or an error happened in the server
    if (!data.success) {
      this.outputError();
    } else {
      if(data.stockists.length) {
        this.outputStockists(data.stockists);
      } else {
        this.outputError('We couldn\'t find stockists near you :(');
      }
    }
  }

  handleError() {
    this.outputError();
  }

  /**
   * Output a message in the stockists container
   * @param {string} msg - The message to output
   */
  outputMessage(msg) {
    this.$stockistsContainer.html(`<p>${msg}</p>`);
  }

  /**
   * Output an error message in the stockists container
   * @param {string} error - The error message to output
   */
  outputError(error = 'An error ocurred') {
    this.$stockistsContainer.html(`<p class="error-message">${error}</p>`);
  }

  /**
   * Output a list of stockists
   * @param {array} stockists - The list of stockists to output
   */
  outputStockists(stockists) {
    // Clear list
    this.$stockistsContainer.html('');

    // Append each element
    stockists.forEach( element => {

      // Start our info string with the basics: title and address
      let info = `
        <h3 class="font-size-mid">${element.post_title}</h3>
        <div><a href="https://www.google.com/maps/search/${element._igv_stockist_address}" target="_blank" rel="noopener noreferrer">${element._igv_stockist_address}</a></div>
        `;

      // Phone
      if (element._igv_stockist_phone !== undefined && element._igv_stockist_phone !== '') {
        info += `
        <div><a href="tel:${element._igv_stockist_phone}" target="_blank" rel="noopener noreferrer" class="link-underline">${element._igv_stockist_phone}</a></div>
        `;
      }

      // Links: website, facebok, instagram
      if (element._igv_stockist_website !== undefined || element._igv_stockist_facebook !== undefined || element._igv_stockist_twitter !== undefined) {
        // Open links paragraph
        let links = `<div>`;

        // Website
        if (element._igv_stockist_website !== undefined) {
          links  += `<a class="font-uppercase link-underline" href="${element._igv_stockist_website}" target="_blank" rel="noopener noreferrer">Website</a>`;
        }

        // Facebook
        if (element._igv_stockist_facebook !== undefined) {
          links  += ` <a class="font-uppercase link-underline" href="${element._igv_stockist_facebook}" target="_blank" rel="noopener noreferrer">Facebook</a>`;
        }

        // Instagram
        if (element._igv_stockist_instagram !== undefined) {
          links  += ` <a class="font-uppercase link-underline" href="${element._igv_stockist_instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>`;
        }

        // Close links paragraph
        links += `</div>`;

        // Append to info
        info += links;

      }

      // Append a list element with our info in it to the stockists list
      this.$stockistsContainer.append(`<li>${info}</li>`);
    });
  }
}

export default Stockists;
