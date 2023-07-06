$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/btn_left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/btn_right.svg"></img></button>',
        dots: false,
        arrows: true,
        centerPadding: '50%',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                autoplay: true,
                autoplaySpeed: 3500,
                arrows: false,
                dots: true
              }
            }
          ]
    });
  });