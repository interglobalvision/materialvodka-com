/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import './covervid.js';
import Shop from './shop';
import Ajaxy from './ajaxy';
import Stockists from './stockists';
import Cube from './cube';
import Mailchimp from './mailchimp';
import AgeCheck from './ageCheck';
import lazySizes from 'lazysizes';
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
      .on('ajaxySuccess', this.onReady.bind(this));

    $(document).ready(this.onReady.bind(this));
  }

  onReady() {
    lazySizes.init();

    this.$window = $(window);
    this.$document = $(document);
    this.$body = $('body');
    this.$header = $('#header');
    this.$mainContent = $('.main-content');
    this.$headerSpacer = $('.header-spacer');
    this.$covervidVideo = $('.covervid-video');

    this.windowHeight = this.$window.outerHeight();

    this.bindMobileNavTrigger();
    this.initCoverVid();
    this.animateBottleSprite();
  }

  onResize() {

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
      this.$covervidVideo.each((index, element) =>  {
        $(element).coverVid(1920, 1080).addClass('show');
      });
    }
  }

  bindMobileNavTrigger() {
    const $mobileNav = $('#mobile-nav');

    $('#mobile-nav-trigger').on('click', () => {
      this.$body.toggleClass('mobile-active');
    });
  }

  animateBottleSprite() {
    if ($('#bottle-sprite').length) {
      const controller = new ScrollMagic.Controller();

      // create Tween
      const tween = TweenMax.to("#bottle-sprite", 1.0, {
        backgroundPosition: "100% 0", // property we're stepping to
        ease: SteppedEase.config(99) // 100 frames - 1
      });

      // build scene
      const scene = new ScrollMagic.Scene({duration: this.windowHeight})
      .triggerElement('#bottle-sprite')
      .triggerHook("onCenter")
      .setTween(tween)
      .addTo(controller);
    }
  }

}

const Material = new Site();
const MaterialShop = new Shop();
const MaterialAjaxy = new Ajaxy();
const MaterialStockists = new Stockists();
const MaterialCube = new Cube();
const MaterialMailchimp = new Mailchimp();
const MaterialAgeCheck = new AgeCheck(MaterialMailchimp.handleMailchimpAjax);
