(function ($) {

		$(document).ready(function () {
			respond();

			smoothScroll();
		});

		$(window).resize(function () {
			respond();
		});

		$(document).load(function () {
			respond();
		});

		function respond() {
			$('.hero').height($(window).innerHeight());
			$('.leaves-container').height($('.gallery-title-container').height());
			var width = $(window).width();
			
			if (width <= 900) {
				$('#freindship').addClass('active');
			} else {
				$('#freindship').removeClass('active');
			}
		};





//	function lightBox() {
//		 lightbox.option({
//		 	alwaysShowNavOnTouchDevices: true,
//		 	positionFromTop: 100,
//		 	showImageNumberLabel: false
//    	});
//	}

function smoothScroll() {
	$('#main-nav a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
}
var stickyOffset = $('.sticky').offset().top;

$(window).scroll(function () {
	var sticky = $('.sticky'),
		scroll = $(window).scrollTop() + $('#nav-bar').height() + sticky.height() + 110;
	console.log("offset " + stickyOffset + " scroll " + scroll);
	if (scroll >= stickyOffset) sticky.addClass('fixed');
	else sticky.removeClass('fixed');

});
}(jQuery));