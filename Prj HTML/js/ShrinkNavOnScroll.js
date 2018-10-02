$(window).scroll(function() {
  if ($(document).scrollTop() > 10) {
    $('.btn-search').addClass('btn-dark');
    $('.navbar').addClass('bg-dark navbar-dark affix ');
   
  } else {
    $('.navbar').removeClass('affix bg-dark navbar-dark');
    $('.btn-search').removeClass('btn-dark');
  }
});