(function($) {

	$(document).ready(function() {
		respond();

		smoothScroll();
	});

	$(window).resize(function() {
		respond();
	});

	$(document).load(function() {

	});

	function respond() {
		$('.hero').height($(window).innerHeight());
		$('.leaves-container').height($('.gallery-title-container').height());
	}

	


//	function lightBox() {
//		 lightbox.option({
//		 	alwaysShowNavOnTouchDevices: true,
//		 	positionFromTop: 100,
//		 	showImageNumberLabel: false
//    	});
//	}

	function smoothScroll() {
		$('#main-nav a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
		        || location.hostname == this.hostname) {

		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		           if (target.length) {
		             $('html,body').animate({
		                 scrollTop: target.offset().top
		            }, 1000);
		            return false;
		        }
		    }
		});
	}

} (jQuery));