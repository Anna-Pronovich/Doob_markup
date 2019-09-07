$('.menu').on('click', function (){
  $(this).toggleClass('active');
  $('.nav-overlay').toggleClass('menu-open');
});

$('.nav a').on('click', function (){
  $('.menu').removeClass('active');
  $('.nav-overlay').removeClass('menu-open');
});

$('.slider').slick({
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 3
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
  
});

