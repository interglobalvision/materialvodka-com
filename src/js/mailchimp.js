/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

class Mailchimp {
  constructor() {
    this.mobileThreshold = 601;

    $(window).on('ajaxSuccess', this.onReady.bind(this)); // Bind ajaxSuccess (custom event, comes from Ajaxy)

    $(document).ready(this.onReady.bind(this));

    this.submitForm = this.submitForm.bind(this);
    this.successMessage = this.successMessage.bind(this);
  }

  onReady() {
    this.$form = $('#mailchimp-form');

    if (this.$form.length) {
      this.$email = $('#mailchimp-email');
      this.$reply = $('#mailchimp-response');

      this.initFormHandling();
    }
  }

  initFormHandling() {
    this.$form.submit(this.submitForm);
  }

  submitForm() {
    var url = WP.mailchimp.replace('/post?', '/post-json?').concat('&c=?');

    var data = {};
    var dataArray = this.$form.serializeArray();

    $.each(dataArray, function (index, item) {
      data[item.name] = item.value;
    });

    $.ajax({
      url: url,
      data: data,
      success: this.successMessage,
      dataType: 'jsonp',
      error: function (resp, text) {
        console.log('mailchimp ajax submit error: ' + text);
      }
    });

    return false;
  }

  successMessage(response) {
    let msg = '';

    console.log(response);

    if (response.result === 'success') {

      msg = 'You\'ve been successfully subscribed';

      this.$reply.removeClass('error').addClass('valid');
      this.$email.removeClass('error').addClass('valid');

    } else {

      this.$email.removeClass('valid').addClass('error');
      this.$reply.removeClass('valid').addClass('error');

      let index = -1;

      try {
        let parts = response.msg.split(' - ', 2);

        if (parts[1] === undefined) {
          msg = response.msg;
        } else {
          let i = parseInt(parts[0], 10);

          if (i.toString() === parts[0]) {
            index = parts[0];
            msg = parts[1];
          } else {
            index = -1;
            msg = response.msg;
          }
        }
      }
      catch (e) {
        index = -1;
        msg = response.msg;
      }
    }

    this.$reply.html(msg);
  }
}

export default Mailchimp;
