$(function(){
  window.onload = function(){
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
    })(window.navigator.userAgent.toLowerCase());
    $('a[href^=#]').on('click',function(){
      var header_height = $('.navi').height();
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      if(_ua.Mobile || _ua.Tablet){
        $('.navi').fadeOut();
        $('fa-remove').hide();
        $('.fa-bars').fadeIn();
      }
      $("html, body").animate({
        scrollTop:position
      }, 700);
      return false;
    });

    $('.hello').typed({
      strings: ["Welcome to my page !","Hello, My World!"],
      showCursor: false,
      typeSpeed: 0
    });

    setTimeout(function(){
      $('.topAni').fadeOut('slow');
    },5*1000);

    $('.fa-bars').on('click',function(){
      $('.navi').fadeIn();
      $(this).hide();
      $('.fa-remove').fadeIn();
    });
    $('.fa-remove').on('click',function(){
      $('.navi').fadeOut();
      $(this).hide();
      $('.fa-bars').fadeIn();
    });
  };
});
