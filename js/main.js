$(window).on('load', function () {
  $('.preloader').removeClass('active');


  const swiper = new Swiper(".vertical-slider", {
    // direction: 'vertical',
    initialSlide: 1,

    pagination: {
      el: '.slider-dots',
      clickable: true,
    },
    effect: 'creative',
    creativeEffect: {
      prev: {

        translate: [45, 77, 0],
      },
      next: {

        translate: ['100%', 0, 0],
      },
    },
    breakpoints: {

      480: {

        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
      },


    },
  })

});

$(document).ready(function () {

  $(".open-menu-js").on("click", function () {
    $hidden_menu = $(".toggle-js");
    $hidden_menu.toggleClass("active");
  })



})