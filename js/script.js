$(function(){
	// $('.aboutme').css('background-color','rgba(0,0,0,0.8)');
	// $('.aboutme').css('color','#f3f3f3');
	$('.aboutme').click(
		function(){
			$('.history_card').removeClass('history_animation');
			$('.skill_card').removeClass('skill_animation');
			$('.contact_card').removeClass('contact_animation');
			$('.top_2 p').removeClass('animation_opacity');
			$('img').removeClass('animation_trans');
			$('img').addClass('animation_retrans');
			
			// $(this).css('background-color','rgba(0,0,0,0.8)');
			// $(this).css('color','#f3f3f3');
			// $('.history').css('background-color','#F3F3F3');
			// $('.history').css('color','black');
			// $('.skill').css('background-color','#F3F3F3');
			// $('.skill').css('color','black');
			// $('.contact').css('background-color','#F3F3F3');
			// $('.contact').css('color','black');
		});
	$('.history').click(
		function(){
			$('.aboutme_card').removeClass('aboutme_animation');
			$('.history_card').addClass('history_animation');
			$('.skill_card').removeClass('skill_animation');
			$('.contact_card').removeClass('contact_animation');
			$('.top_2 p').addClass('animation_opacity');
			$('img').addClass('animation_trans');
			$('img').removeClass('animation_retrans');
			
			// $('.aboutme').css('background-color','#F3F3F3');
			// $('.aboutme').css('color','black');
			// $(this).css('background-color','rgba(0,0,0,0.8)');
			// $(this).css('color','#f3f3f3');
			// $('.skill').css('background-color','#F3F3F3');
			// $('.skill').css('color','black');
			// $('.contact').css('background-color','#F3F3F3');
			// $('.contact').css('color','black');
		});
	$('.skill').click(
		function(){
			$('.aboutme_card').removeClass('aboutme_animation');
			$('.history_card').removeClass('history_animation');
			$('.skill_card').addClass('skill_animation');
			$('.contact_card').removeClass('contact_animation');
			$('.top_2 p').addClass('animation_opacity');
			$('img').addClass('animation_trans');
			$('img').removeClass('animation_retrans');
			
			// $('.aboutme').css('background-color','#F3F3F3');
			// $('.aboutme').css('color','black');
			// $('.history').css('background-color','#F3F3F3');
			// $('.history').css('color','black');
			// $(this).css('background-color','rgba(0,0,0,0.8)');
			// $(this).css('color','#f3f3f3');
			// $('.contact').css('background-color','#F3F3F3');
			// $('.contact').css('color','black');
		});
	$('.contact').click(
		function(){
			$('.aboutme_card').removeClass('aboutme_animation');
			$('.history_card').removeClass('history_animation');
			$('.skill_card').removeClass('skill_animation');
			$('.contact_card').addClass('contact_animation');
			$('.top_2 p').addClass('animation_opacity');
			$('img').addClass('animation_trans');
			$('img').removeClass('animation_retrans');
			
			// $('.aboutme').css('background-color','#F3F3F3');
			// $('.aboutme').css('color','black');
			// $('.history').css('background-color','#F3F3F3');
			// $('.history').css('color','black');
			// $('.skill').css('background-color','#F3F3F3');
			// $('.skill').css('color','black');
			// $(this).css('background-color','rgba(0,0,0,0.8)');
			// $(this).css('color','#f3f3f3');
		});
});