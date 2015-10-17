$(function(){
  var s = skrollr.init();

  $('.fa-angle-double-up').on("click",function(){
    $('html,body').animate({
      scrollTop: 0
    },3000);
  });

  var _ua = (function(u){
    return {
      Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
        || u.indexOf("ipad") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
        || u.indexOf("kindle") != -1
        || u.indexOf("silk") != -1
        || u.indexOf("playbook") != -1,
      Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
        || u.indexOf("iphone") != -1
        || u.indexOf("ipod") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
        || u.indexOf("blackberry") != -1
    }
  })(window.navigator.userAgent.toLowerCase())
  if(_ua.Mobile || _ua.Tablet){
    $('.pc').hide();
    $('.mobile').show();
    $('#top2 i').hide();
  }else{
    $('.pc').show();
    $('.mobile').hide();
  }
});