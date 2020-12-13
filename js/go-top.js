$(document).ready(function(){
  $('body').append('<a href="index.html" id="go-top" title="На верх страницы"><i class="fas fa-chevron-up"></i></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow") // появление
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow") // пропадает
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, 1000) // скорость скролла
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});