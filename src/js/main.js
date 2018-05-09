/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import './covervid.js';
import Shop from './shop';

import lazySizes from 'lazysizes';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import TweenMax from 'gsap';


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
    this.animateBottleSprite();
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

  animateBottleSprite() {
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

const Material = new Site();
const MaterialShop = new Shop();
