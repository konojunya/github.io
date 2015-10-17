$(function(){
  var s = skrollr.init();

  $('.fa-angle-double-up').on("click",function(){
    $('html,body').animate({
      scrollTop: 0
    },3000);
  });

});