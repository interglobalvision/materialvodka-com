/* jshint esversion: 6, browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, document, window, WP */

class Ajaxy {
  constructor() {
    // firstLoad is checked below. It helps prevent Safari's popstate on load to
    // reload (ajax) the site.
    this.firstLoad = true;

    // Bind function
    this.ajaxBefore = this.ajaxBefore.bind(this);
    this.ajaxSuccess = this.ajaxSuccess.bind(this);
    this.ajaxAfter = this.ajaxAfter.bind(this);
    this.ajaxErrorHandler = this.ajaxErrorHandler.bind(this);
    this.handlePopState = this.handlePopState.bind(this);

    // Bind links
    this.bindLinks();

    // Ajax events
    this.ajaxSuccessEvent = new Event('ajaxySuccess');
    this.ajaxEndTransition = new Event('ajaxyEndTransition');

    $(window).bind('popstate', this.handlePopState);

  }

  handlePopState() {
    if( !this.firstLoad ) {
      this.load(document.location.origin + document.location.pathname, false);
    }
  }

  bindLinks() {
    const siteURL = "http://" + top.location.host.toString();

    this.$ajaxyLinks = $("a[href^='" + siteURL + "'], a[href^='/'], a[href^='./'], a[href^='../'], a[href^='#']").not('#wpadminbar a, .not-ajax');

    // Find all ajaxy links and bind ajax event
    this.$ajaxyLinks.click(this.handleLinkClick.bind(this));
  }

  handleLinkClick(event) {

    // Detect if is cmd+click or ctrl+click or has been defaultPrevented somewhere else
    if ( !event.isDefaultPrevented() && !event.metaKey && !event.ctrlKey ) {
      event.preventDefault();

      let url = event.currentTarget.href;

      this.load(url);
    }

    return;

  }

  reset() {

    // Unbind click from all ajax links
    this.$ajaxyLinks.unbind('click');

    // Re initiate
    this.bindLinks();
  }

  /*
   * Load a new URL thru ajax
   * @url {String}: URL to load
   * @pushState {Bool}: Make false if a new state doens't need to be pushed (Default: true). Ex, going back
   */
  load(url, pushState = true) {

    this.firstLoad = false;

    if( pushState ) {
      // Push new history state
      history.pushState(null, null, url);
    }

    $.ajax(url, {
      dataType: 'html',
      beforeSend: this.ajaxBefore,
      error: this.ajaxErrorHandler,
      success: this.ajaxSuccess,
      complete: this.ajaxAfter,
    });
  }

  ajaxBefore(xhr, settings) {
    const $activeContent = $('#transition-cube .active .main-content');
    const contentTop = $(document).scrollTop()

    $('#transition-cube .active .main-content').addClass('transition-content-absolute').css({
      top: '-' + contentTop + 'px',
    });

    $('body').addClass('loading');

    $('#transition-cube').css('transform', 'scale(0.6)');
  }

  ajaxAfter() {
    this.startTransition();
    this.reset();
  }

  startTransition() {
    const $active = $('#transition-cube .active');
    const $next = $('#transition-cube .next');

    $active.removeClass('active');
    $next.addClass('active');

    setTimeout(() => {
      $('#transition-cube .transition-cube-side').not('.active').css('opacity', '0');
      $('#transition-cube').css('transform', 'scale(1)');

      //$next.removeClass('next');
      //$active.addClass('next');

      this.endTransition();
    }, 500);
  }

  endTransition() {
    $('#transition-cube .next.active').removeClass('next');

    $('#transition-cube .transition-cube-side').not('.active').addClass('next');

    setTimeout(() => {
      $('#transition-cube .next').css('opacity', '1');
      $('body').removeClass('loading');
      window.dispatchEvent(this.ajaxEndTransition);
    }, 500);
  }

  ajaxErrorHandler(jqXHR, textStatus) {
    console.log(textStatus);
    console.log(jqXHR);
  }

  ajaxSuccess(data, textStatus, jqXHR) {
    // Convert data into proper html to be able to fully parse thru jQuery
    let respHtml = document.createElement('html');

    respHtml.innerHTML = data;

    // Get changes: body classes, page title, main content, header
    let $bodyClasses = $('body', respHtml).attr('class');
    let $content = $('.main-content', respHtml);
    let $title = $('title', respHtml).text();

    // Update with new title, content and classes
    document.title = $title;
    $('#transition-cube .next').html('').append($content);
    $('body').removeAttr('class').addClass($bodyClasses + ' loading');
    // Update Admin Bar
    if( WP.isAdmin ) {
      $('#wpadminbar').html( $('#wpadminbar', respHtml) );
    }

    // Trigger event on window
    window.dispatchEvent(this.ajaxSuccessEvent);

  }
}

export default Ajaxy;
