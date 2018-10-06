$(window).scroll(function() {
  if ($(document).scrollTop() > 10) {
    $('.icon-search').addClass('icon-search-scroll');
    $('.icon-cart').addClass('icon-cart-scroll');
    $('.navbar').addClass('bg-dark navbar-dark affix ');
   
  } else {
  	$('.icon-search').removeClass('icon-search-scroll');
  	$('.icon-cart').removeClass('icon-cart-scroll');
    $('.navbar').removeClass('affix bg-dark navbar-dark'); 
  }
});