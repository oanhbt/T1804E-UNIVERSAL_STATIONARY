$(window).scroll(function() {
  if ($(document).scrollTop() > 10) {
    $('.navbar').addClass('affix bg-dark navbar-dark');
    $('.btn-search').addClass('btn-dark');
   
  } else {
    $('.navbar').removeClass('affix bg-dark navbar-dark');
    $('.btn-search').removeClass('btn-dark');
  }
});