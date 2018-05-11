/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, WP */

class Cube {
  constructor() {
    this.mobileThreshold = 601;

    $(window)
      .resize(this.onResize.bind(this)) // Bind resize
      .on('ajaxSuccess', this.onReady.bind(this)); // Bind ajaxSuccess (custom event, comes from Ajaxy)

    $(document).ready(this.onReady.bind(this));

  }

  onResize() {
    this.updateCubeStyle('recipe', '.recipe-item');
  }

  onReady() {
    this.bindRecipeCube();
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

        this.setTransition(selector);

      } else {

        const styleElement = `
        <style type="text/css" id="cube-style-${styleId}">
          ${styleContent}
        </style>`;

        $('head').append(styleElement);

        $(selector).addClass('ready');

        this.setTransition(selector);
      }
    }
  }

  setTransition(selector) {
    const cubeTransition = 0.6;

    window.setTimeout(function() {
      $(selector).find('.cube-left, .cube-right').css({
        transition: 'transform ' + cubeTransition + 's ease-in-out',
      });
    }, 100);
  }
}

export default Cube;
