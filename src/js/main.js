/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import './covervid.js';
import Shop from './shop';

import lazySizes from 'lazysizes';
import dayjs from 'dayjs';

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
      console.log('clicked');
      console.log(month + day + year);
      console.log(dayjs);
      const birthday = dayjs(new Date(year, month, day));
      const age = dayjs().diff(birthday, 'years');
      console.log(birthday);
      console.log(age);
      //date.now in milliseconds
      //convert date of bday to milliseconds
      //subtract ms now - ms bday
      //if ms is > a certain amount (how many milliseconds is a 21 year old?)
      //if under 21, don't save cookie
      //if 21 +, save cookie
    });
  }


}

const Material = new Site();
//const MaterialShop = new Shop();
