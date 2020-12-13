$(document).ready(function(){
  $('.slider').slick({
    arrows: false, // стрелки
    dots: true, // булеты
    adaptiveHeight: true, // адаптивная высота слайдов
    slidesToShow: 3, // кол-во слайдов
    slidesToScroll: 3, // слайдов для скролла
    speed: 300, // скорость смены слайдов
    responsive : [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
	      breakpoint: 1025,
	      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
	      }
	    }
    ]
  });
});