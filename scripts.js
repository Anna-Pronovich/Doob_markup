$('.menu').on('click', function (){
  $(this).toggleClass('active');
  $('.nav-overlay').toggleClass('menu-open');
});