/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import './covervid.js';
import Shop from './shop';
import Ajaxy from './ajaxy';
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

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

    // Bind
    this.repositionHeader = this.repositionHeader.bind(this);

  }

  onResize() {
    this.updateCubeStyle('recipe', '.recipe-item');
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
    this.bindRecipeCube();
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

  bindRecipeCube() {
    if ($('.recipe-item').length) {
      $('.recipe-item').on({
        'click': function() {
          $('.cube-holder').removeClass('cube-active');
          $(this).addClass('cube-active').find('.cube-right').addClass('cube-front');
          $(this).addClass('cube-active').find('.cube-left').removeClass('cube-front');
        },
        'mouseleave': function() {
          $('.cube-holder').removeClass('cube-active');
          $(this).find('.cube-right').removeClass('cube-front');
          $(this).find('.cube-left').addClass('cube-front');
        }
      });

      this.updateCubeStyle('recipe', '.recipe-item');
    }
  }

  updateCubeStyle(styleId, selector) {
    const cubeTransition = 0.6;

    if ($(selector).length) {
      const width = $(selector).width() / 2;

      const styleContent = `
      ${selector} .cube-left {
        transform: rotateY(-90deg) translateZ(${width}px)
      }
      ${selector} .cube-left.cube-front {
        transform: rotateY(0deg) translateZ(${width}px)
      }
      ${selector} .cube-right {
        transform: rotateY(90deg) translateZ(${width}px)
      }
      ${selector} .cube-right.cube-front {
        transform: rotateY(0deg) translateZ(${width}px)
      }`;

      if ($('style#cube-style-' + styleId).length) {
        $('style#cube-style-' + styleId).html(styleContent);
      } else {
        const styleElement = `
        <style type="text/css" id="cube-style-${styleId}">
          ${styleContent}
        </style>`;

        $('head').append(styleElement);

        $(selector).addClass('ready');

        window.setTimeout(function() {
          $(selector).find('.cube-left, .cube-right').css({
            transition: 'transform ' + cubeTransition + 's ease-in-out',
          });
        }, 100);
      }
    }
  }

  submitAgeForm() {
    $('#submit-age').on('click', function(e){
      e.preventDefault();
      const month = $('#birthday-month').val();
      const day = $('#birthday-day').val();
      const year = $('#birthday-year').val();
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
const MaterialShop = new Shop();
const MaterialAjaxy = new Ajaxy();
const MaterialMailchimp = new Mailchimp();
