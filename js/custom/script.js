/**
 * Custom Scripts
 */

(function ($, Drupal) {

  // Mobile Navigation
  $('.header__top-mobile-toggle').sidr({
    name: 'sidr',
    side: 'right',
    onOpen: function(name) {
      $('#mobile-overlay').fadeIn('fast');
    },
    onClose: function(name) {
      $("#mobile-overlay").fadeOut("fast");
    }
  });

  $('.sidr__content-close-btn, #mobile-overlay').click(function() {
    $.sidr('close', 'sidr');
  });

  // Close Sidr on window resize
  var $window = $(window);
  function checkWidth() {
    $.sidr('close', 'sidr');
  }
  $(window).resize(checkWidth);

  //Double Tap parent of dropdown on touch devices
  $('.menu__dropdown-parent').doubleTapToGo();

})(jQuery, Drupal);
