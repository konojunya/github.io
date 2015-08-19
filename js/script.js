//main js
$(function(){
  //top animation


   //topへ
   $('.fa-chevron-up').click(function(){
      $("body").animate({scrollTop:0},1000);
      $('.navicard').removeClass('navicard_ani');
   });

   //navicard js
   $('.fa-bars').click(
   function(){
      $('.navicard').toggleClass('navicard_ani');
   });

   //topへ
   var home_position = $('.home').offset().top;
   $('.navi_home').click(function(){
       $("html,body").animate({
           scrollTop : home_position
       }, {
           queue : false
       });
       $('.navicard').removeClass('navicard_ani');
   });

   //historyへ
   var history_position = $('.history').offset().top;
   $('.navi_history').click(function(){
       $("html,body").animate({
           scrollTop : history_position
       }, {
           queue : false
       });
       $('.navicard').removeClass('navicard_ani');
   });

   //likeへ
   var like_position = $('.like').offset().top;
   $('.navi_like').click(function(){
       $("html,body").animate({
           scrollTop : like_position
       }, {
           queue : false
       });
       $('.navicard').removeClass('navicard_ani');
   });

   //skillへ
   var skill_position = $('.skill').offset().top;
   $('.navi_skill').click(function(){
       $("html,body").animate({
           scrollTop : skill_position
       }, {
           queue : false
       });
       $('.navicard').removeClass('navicard_ani');
   });

   //archiveへ
   var archive_position = $('.archive').offset().top;
   $('.navi_archive').click(function(){
       $("html,body").animate({
           scrollTop : archive_position
       }, {
           queue : false
       });
       $('.navicard').removeClass('navicard_ani');
   });

   //portfolioへ
   var portfolio_position = $('.portfolio').offset().top;
   $('.navi_portfolio').click(function(){
       $("html,body").animate({
           scrollTop : portfolio_position
       }, {
           queue : false
       });
       $('.navicard').removeClass('navicard_ani');
   });

   //communityへ
   var community_position = $('.community').offset().top;
   $('.navi_community').click(function(){
       $("html,body").animate({
           scrollTop : community_position
       }, {
           queue : false
       });
       $('.navicard').removeClass('navicard_ani');
   });

   //contactへ
   var contact_position = $('.contact').offset().top;
   $('.navi_contact').click(function(){
       $("html,body").animate({
           scrollTop : contact_position
       }, {
           queue : false
       });
       $('.navicard').removeClass('navicard_ani');
   });

   //community
   $('.community_contents').hover(
   function(){
      $('.community_card').animate({
         opacity: "1"
      },200,function(){
        $(this).css('z-index','0')
      });
   },
   function(){
      $('.community_card').animate({
         opacity: "0"
      },200,function(){
        $(this).css('z-index','-100')
      });
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