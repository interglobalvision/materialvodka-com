/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import './covervid.js';
import Shop from './shop';

import lazySizes from 'lazysizes';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';

// Import style
import '../styl/site.styl';

class Site {
  constructor() {
    this.mobileThreshold = 601;

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

  }

  onResize() {

  }

  onReady() {
    lazySizes.init();

    this.$covervidVideo = $('.covervid-video');

    this.checkForCookie();

    this.initCoverVid();

    this.submitAgeForm();

  }

  fixWidows() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      var string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  }

  initCoverVid() {
    const _this = this;

    if (_this.$covervidVideo.length) {
      _this.$covervidVideo.coverVid(1920, 1080);
    }
  }

  submitAgeForm() {
    $('#submit-age').on('click', function(e){
      e.preventDefault();
      const month = $('.month').val();
      const day = $('.day').val();
      const year = $('.year').val();
      const birthday = dayjs(new Date(year, month, day));
      const age = dayjs().diff(birthday, 'years');
      if (age >= 21) {
        Cookies.set('legalAge', true, { expires: 1 }); // Expires in 1 day
        $('body').addClass('legal-age');
      } else {
        console.log("not of age");
      }
    });
  }

  checkForCookie() {
    const cookie = Cookies.get('legalAge');
    console.log(cookie);
    if (cookie) {
      $('body').addClass('legal-age');
    } else {
      console.log('doing nothing')
    }
  }


}

const Material = new Site();
//const MaterialShop = new Shop();
