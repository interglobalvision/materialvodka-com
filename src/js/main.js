/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import './covervid.js';
import Shop from './shop';
import Ajaxy from './ajaxy';
import Stockists from './stockists';
import Cube from './cube';
import Mailchimp from './mailchimp';
import lazySizes from 'lazysizes';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import ScrollMagic from 'scrollmagic';
import animationGsap from 'animationGsap';
import TweenMax from 'gsap';

// Import style
import '../styl/site.styl';

class Site {
  constructor() {
    this.mobileThreshold = 601;

    $(window)
      .resize(this.onResize.bind(this))
      .on('ajaxSuccess', this.onReady.bind(this));

    $(document).ready(this.onReady.bind(this));

    // Bind
    this.repositionHeader = this.repositionHeader.bind(this);
    this.handleAgeFormSubmit = this.handleAgeFormSubmit.bind(this);

  }

  onResize() {
    this.sizeHeaderSpacer();
    this.repositionHeader();
  }

  onReady() {
    lazySizes.init();

    this.$window = $(window);
    this.$document = $(document);
    this.$header = $('#header');
    this.$mainContent = $('#main-content');
    this.$headerSpacer = $('#header-spacer');
    this.$covervidVideo = $('.covervid-video');

    this.checkForCookie();
    this.initCoverVid();
    this.submitAgeForm();
    this.bindStickyHeader();
    this.initCoverVid();
    this.animateBottleSprite();
  }

  fixWidows() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      let string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  }

  initCoverVid() {
    if (this.$covervidVideo.length) {
      this.$covervidVideo.coverVid(1920, 1080);
    }
  }

  bindStickyHeader() {
    this.sizeHeaderSpacer();

    this.$window.on('scroll', this.repositionHeader);
  }

  repositionHeader() {
    if ((this.headerSpacerOffset - this.windowHeight) <= this.$window.scrollTop()) {
      this.$header.addClass('bottom').css({
        top: this.headerTop + 'px',
        bottom: 'auto'
      });
    } else if ((this.headerSpacerOffset - this.windowHeight) > this.$window.scrollTop()) {
      this.$header.removeClass('bottom').css({
        top: 'auto',
        bottom: 0
      });
    }
  }

  sizeHeaderSpacer() {
    const headerHeight = this.$header.outerHeight();
    this.$headerSpacer.css('height', headerHeight + 'px');
    this.headerTop = this.$headerSpacer.offset().top;
    this.headerSpacerOffset = this.headerTop + headerHeight;
    this.windowHeight = this.$window.outerHeight();
  }

  animateBottleSprite() {
    if ($('#bottle-sprite').length) {
      const controller = new ScrollMagic.Controller();

      // create Tween
      const tween = TweenMax.to("#bottle-sprite", 1.0, {
        backgroundPosition: "100% 0",
        ease: SteppedEase.config(59)
      });

      // build scene
      const scene = new ScrollMagic.Scene({duration: 500})
      .triggerHook("onCenter")
      .setTween(tween)
      .addTo(controller);
    }
  }

  submitAgeForm() {
    $('#submit-age').on('click', this.handleAgeFormSubmit);
  }

  handleAgeFormSubmit(event) {
    event.preventDefault();
    const month = $('#birthday-month').val();
    const day = $('#birthday-day').val();
    const year = $('#birthday-year').val();
    const validation = this.validateAgeForm(month, day, year);

    if (validation['isValid'] === false){
      $('#age-form-response').html(validation['errorMessage']).addClass('age-form-error');
    } else {
      Cookies.set('legalAge', true, { expires: 1 }); // Expires in 1 day
      $('body').removeClass('age-check');
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


const Material = new Site();
const MaterialShop = new Shop();
const MaterialAjaxy = new Ajaxy();
const MaterialStockists = new Stockists();
const MaterialCube = new Cube();
const MaterialMailchimp = new Mailchimp();
