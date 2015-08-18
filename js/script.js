//main js
$(function(){
	$('.wrapper > i').click(function(){
		$("body").animate({scrollTop:0},1000);
	});
   $('.community_contents').hover(
      function(){
         $('.community_card').animate({
            top: "-120%",
         },350);
      },
      function(){
         $('.community_card').animate({
            top: "-300%"
         },350);
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