$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  $("[data-fancybox]").fancybox({
    youtube: {},
  });

  $(".heroes__slider-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".heroes__slider-text",
    prevArrow:
      '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow:
      '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt=""></button>',
  });
  $(".heroes__slider-text").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".heroes__slider-img",
    fade: true,
    arrows: false,
  });
});
