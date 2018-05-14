/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

import dayjs from 'dayjs';
import Cookies from 'js-cookie';

class AgeCheck {
  constructor(handleMailchimpAjax) {
    this.mobileThreshold = 601;

    $(document).ready(this.onReady.bind(this));

    this.handleMailchimpAjax = handleMailchimpAjax;

    // Bind
    this.handleAgeFormSubmit = this.handleAgeFormSubmit.bind(this);
  }

  onResize() {

  }

  onReady() {
    this.checkForCookie();
    this.bindAgeForm();
  }

  bindAgeForm() {
    $('#submit-age').on('click', this.handleAgeFormSubmit);
  }

  handleAgeFormSubmit(event) {
    event.preventDefault();
    const month = $('#birthday-month').val();
    const day = $('#birthday-day').val();
    const year = $('#birthday-year').val();
    const email = $('#mailchimp-email').val();
    const validation = this.validateAgeForm(month, day, year);

    if (validation.isValid === false){
      $('#age-form-response').html(validation.errorMessage).addClass('age-form-error');
    } else {
      Cookies.set('legalAge', true, { expires: 1 }); // Expires in 1 day
      $('body').removeClass('age-check');

      if (email !== null && email !== '' && this.handleMailchimpAjax !== undefined) {
        const data = {'EMAIL': email};

        this.handleMailchimpAjax(data);
      }
    }
  }

  validateAgeForm(month, day, year) {
    //returns true or false based on validation state
      let isValid = true;
      let errorMessage = '';
      if ( month === null || month === '' || day === null || day === '' || year === null || year === '') {
        isValid = false;
        errorMessage = 'Please fill out all fields';
      } else if (isNaN(month) || isNaN(day) || isNaN(year)) {
        isValid = false;
        errorMessage = 'Enter a valid number';
      } else if (month > 12 || month < 1) {
        isValid = false;
        errorMessage = 'Enter a valid month';
      } else if (day > 31 || day < 1) {
        isValid = false;
        errorMessage = 'Enter a valid day';
      } else if (year > 2050 || year < 1900) {
         isValid = false;
         errorMessage = 'Enter a valid year';
      } else {
        const birthday = dayjs(new Date(year, month, day));
        const age = dayjs().diff(birthday, 'years');
        if (age < 21) {
          isValid = false;
          errorMessage = 'You must be of legal age to enter';
        }
      }
      return {isValid, errorMessage}
  }

  checkForCookie() {
    const cookie = Cookies.get('legalAge');
    if (!cookie) {
      $('body').addClass('age-check');
    }
  }
}

export default AgeCheck;
