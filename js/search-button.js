$(document).ready(function(){
  
  $(".fa-search").click(function(){
  $(".search__container, .text").toggleClass("active");
    $("text[type='text']").focus();
  });
  
});