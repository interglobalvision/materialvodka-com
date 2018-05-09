/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document */

// Import dependencies
import './covervid.js';
import Shop from './shop';

import lazySizes from 'lazysizes';

// Import style
import '../styl/site.styl';

class Site {
  constructor() {
    this.mobileThreshold = 601;

    $(window).resize(this.onResize.bind(this));

    $(document).ready(this.onReady.bind(this));

  }

  onResize() {
    this.updateCubeStyle('recipe', '.recipe-item');
  }

  onReady() {
    lazySizes.init();

    this.$covervidVideo = $('.covervid-video');

    this.initCoverVid();

    this.bindRecipeCube();
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

  bindRecipeCube() {
    if ($('.recipe-item').length) {
      $('.recipe-item').on('click', function() {
        $(this).find('.cube-left, .cube-right').toggleClass('cube-front');
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
}

const Material = new Site();
const MaterialShop = new Shop();
