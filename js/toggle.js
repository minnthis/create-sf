// JavaScript Document
$(document).ready(function(e) {
	// Navigation links
	$(function() {
		$('.right a').bind('click',function(event){
			var $anchor = $(this);
	 
	 		// on click, bring section to top and set anchor to active
			$('html, body').animate({
				scrollTop: $($anchor.attr('href')).offset().top-120
			}, 1000);
			$('li a').removeClass('active');
			$(this).addClass('active');
			
			event.preventDefault();
		});
	}); // end nav anchor binding function
	
	$(function() {
		$('.name').bind('click', function(e) {
			$('html, body').animate({scrollTop: 0}, 800);
			e.preventDefault();
			
			$('.right a').removeClass('active');
		});
	}); // end scroll to top funciton


	$(window).bind('scroll',function() {
		var section = $('.pagesection');
		section.each(function(i) {
			
			var top_of_object = $(this).offset().top-125;
			var top_of_window = $(window).scrollTop();
				
				/* If the object is completely visible in the window, fade it in */
				if( top_of_window > top_of_object ){
					
					$(this).animate({'opacity':'1'},500);

				}
				
		});
	}); // end object fading function
});
