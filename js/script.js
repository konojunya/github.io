//main js
$(function(){
   //topへ
   $('.fa-chevron-up').click(function(){
      $("body").animate({scrollTop:0},1000);
      $('.sec').show();
        $('.navicard').animate({
        right: "-200%"
      },650);
   });

   //navicard js
   $('.sec').click(
   function(){
      $('.first').show();
      $(this).hide();
      $('.navicard').css('opacity',"1");
      $('.navicard').animate({
        right: "0"
      },650);
   });
    $('.first').click(
      function(){
        $('.sec').show();
        $(this).hide();
        $('.navicard').animate({
        right: "-200%"
      },650);
      });

   //homeへ
   $('.navi_home').click(function(){
    var home_position = $('.home').offset().top;
       $("html,body").animate({
           scrollTop : home_position
       }, {
           queue : false
       });
       $('.sec').show();
        $('.navicard').animate({
        opacity: 0
      },750);
        setTimeout(function(){
          $('.navicard').css('right',"-200%");
        },750);
   });

   //historyへ
   $('.navi_history').click(function(){
    var history_position = $('.history').offset().top;
       $("html,body").animate({
           scrollTop : history_position
       }, {
           queue : false
       });
       $('.sec').show();
        $('.navicard').animate({
        opacity: 0
      },750);
        setTimeout(function(){
          $('.navicard').css('right',"-200%");
        },750);
   });

   //likeへ
   $('.navi_like').click(function(){
       var like_position = $('.like').offset().top;
       $("html,body").animate({
           scrollTop : like_position
       }, {
           queue : false
       });
       $('.sec').show();
        $('.navicard').animate({
        opacity: 0
      },750);
        setTimeout(function(){
          $('.navicard').css('right',"-200%");
        },750);
   });

   //skillへ
   $('.navi_skill').click(function(){
       var skill_position = $('.skill').offset().top;
       $("html,body").animate({
           scrollTop : skill_position
       }, {
           queue : false
       });
       $('.sec').show();
        $('.navicard').animate({
        opacity: 0
      },750);
        setTimeout(function(){
          $('.navicard').css('right',"-200%");
        },750);
   });

   //archiveへ
   $('.navi_archive').click(function(){
       var archive_position = $('.archive').offset().top;
       $("html,body").animate({
           scrollTop : archive_position
       }, {
           queue : false
       });
       $('.sec').show();
        $('.navicard').animate({
        opacity: 0
      },750);
        setTimeout(function(){
          $('.navicard').css('right',"-200%");
        },750);
   });

   //portfolioへ
   $('.navi_portfolio').click(function(){
       var portfolio_position = $('.portfolio').offset().top;
       $("html,body").animate({
           scrollTop : portfolio_position
       }, {
           queue : false
       });
       $('.sec').show();
        $('.navicard').animate({
        opacity: 0
      },750);
        setTimeout(function(){
          $('.navicard').css('right',"-200%");
        },750);
   });

   //communityへ
   $('.navi_community').click(function(){
       var community_position = $('.community').offset().top;
       $("html,body").animate({
           scrollTop : community_position
       }, {
           queue : false
       });
       $('.sec').show();
        $('.navicard').animate({
        opacity: 0
      },750);
        setTimeout(function(){
          $('.navicard').css('right',"-200%");
        },750);
   });

   //contactへ
   $('.navi_contact').click(function(){
       var contact_position = $('.contact').offset().top;
       $("html,body").animate({
           scrollTop : contact_position
       }, {
           queue : false
       });
       $('.sec').show();
        $('.navicard').animate({
        opacity: 0
      },750);
        setTimeout(function(){
          $('.navicard').css('right',"-200%");
        },750);
   });

   //community
   $('.community_contents').hover(
   function(){
      $('.community_card').animate({
         top: "0"
      },300);
   },
   function(){
      $('.community_card').animate({
         top: "-200%"
      },300);
   });
});
//time js
function set2fig(num) {
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function showClock() {
   var nowTime = new Date();
   var nowHour = set2fig( nowTime.getHours() );
   var nowMin = set2fig( nowTime.getMinutes() );
   var nowSec = set2fig( nowTime.getSeconds() );
   var msg = nowHour + ":" + nowMin + ":" + nowSec;
   document.getElementById("clock").innerHTML = msg;
}
setInterval('showClock()',1);

//feed js
google.load("feeds","1");

function initialize(){
   var feed = new google.feeds.Feed('http://rssblog.ameba.jp/konojunya0303/rss.html');

   feed.setNumEntries(20);
   feed.includeHistoricalEntries();
   feed.load(function(result){
      if(!result.error){
         var container = document.getElementById('feed');
         for (i = 0; i < result.feed.entries.length; i++){
            var entry = result.feed.entries[i];

            var link = document.createElement("a");
            link.href = entry.link;
            link.appendChild(document.createTextNode(entry.title));

            var li = document.createElement("li");
            li.appendChild(link);

            container.appendChild(li);
         }
      }
   });
}
google.setOnLoadCallback(initialize);