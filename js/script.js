window.onload = function(){
	draw();
}
function draw(){
	var canvas = document.getElementById('mycanvas');
	if(!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d');
(function en(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.globalAlpha = 0.6;
		for(var i = 0; i < 30; i++){
			var x = Math.floor(Math.random()*1500);
			var y = Math.floor(Math.random()*1500);
			var r = Math.floor(Math.random()*400);

		 	ctx.fillStyle = "rgb("+getRandomColor()+","+getRandomColor()+","+getRandomColor()+")";
			ctx.beginPath();
			ctx.arc(x,y,r,0,2*Math.PI);
			ctx.stroke();
			ctx.fill();
		}
		// setTimeout(en,800)
	})();
	function getRandomColor(){
		return Math.floor(Math.random()*255);
	}
}
$(function(){
	$('.pirouette').click(
		function(){
			$(this).css('top','10%');
			$(this).css('left','10%');
			$(this).css('width','80%');
			$(this).css('height','auto');
			$(this).css('border-radius','0');
			$(this).css('line-height','3rem');
			$('.spacing').css('letter-spacing','1.5rem');
			$('.teachers').hide();
			$('.evsche').hide();
			$('.lessche').hide();
			$('.library').hide();
		});
	$('.library').click(
		function(){
			$(this).css('top','10%');
			$(this).css('left','10%');
			$(this).css('width','80%');
			$(this).css('height','auto');
			$(this).css('border-radius','0');
			$(this).css('line-height','3rem');
			$('.spacing').css('letter-spacing','1.5rem');
			$('.teachers').hide();
			$('.evsche').hide();
			$('.lessche').hide();
			$('.pirouette').hide();
		});
	$('.teacher1-list').click(
		function(){
			$('.teacher1').fadeIn();
			$('.teacher2').hide();
			$('.teacher3').hide();
		});
	$('.teacher2-list').click(
		function(){
			$('.teacher1').hide();
			$('.teacher2').fadeIn();
			$('.teacher3').hide();
		});
	$('.teacher3-list').click(
		function(){
			$('.teacher1').hide();
			$('.teacher2').hide();
			$('.teacher3').fadeIn();
		});
});