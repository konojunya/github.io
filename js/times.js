$(function(){
  var date = new Date(),
      hours = date.getHours();

  var color = [
    // morning
    ["rgb(204,194,189)","rgb(108,144,139)"],
    // noon
    ["rgb(51,174,168)","rgb(255,191,34)"],
    // night
    ["rgb(27, 17, 79)","rgb(244, 214, 56)"]
  ];

  if(hours >= 5 && hours < 13){
    // 5:00:00 ~ 12:59:59
    setColor(color[0][0],color[0][1]);
    $('.fa-sun-o').show();
  }else if(hours >= 13 && hours < 19){
    // 13:00:00 ~ 18:59:59
    setColor(color[1][0],color[1][1]);
    $('.fa-cloud').show();
  }else{
    // 19:00:00 ~ 4:59:59
    setColor(color[2][0],color[2][1]);
    $('.fa-moon-o').show();
  }

  function setColor(color1, color2){
    $('.topAni, .navi, #topBox, #portfolio, #community .content, #contact, footer').css("background-color",color1);
    $('#about, #about dl, #community').css("color",color1);

    $('#about, #community').css("background-color",color2);
    $('.topAni, .fa-bars, .fa-remove, .navi a, #topBox, #portfolio, #community p, #community a, #contact, #contact a, footer').css("color",color2);

    var css = "<style type='text/css'>#topBox h1:before{background-color:"+color2+";} #topBox h1:after{background-color:"+color2+";} .fa-bars{text-shadow: 0px 0px 3px "+color1+"</style>";

    $('#hoge').replaceWith($(css));
  }
});
