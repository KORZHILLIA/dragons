jQuery(document).ready(function ($) {
  $('.customers-list').slick({
    arrows: false,
    dots: true,
    appendDots: $('.customers-slider__thumb'),
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });
});
