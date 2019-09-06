$('.menu').on('click', function (){
  $(this).toggleClass('active');
  $('.nav-overlay').toggleClass('menu-open');
});

$('.nav a').on('click', function (){
  $('.menu').removeClass('active');
  $('.nav-overlay').removeClass('menu-open');
})