$(function () {
  $('.menu__link, .header__link, .author__link, .footer__logo').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.menu__btn, .menu__link, .logo').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    // 
  });

  $('.reviews__items').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  //липкая шапка
  $(window).scroll(function () {
    $scrollPosition = $(window).scrollTop();
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

  var mixer = mixitup('.portfolio__content');
});