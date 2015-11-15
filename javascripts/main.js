(function ($) {

		$(document).ready(function () {
			respond();

			smoothScroll();
		});

		$(window).resize(function () {
			respond();
			console.log($(window).width())
		});

		$(document).load(function () {
			respond();
		});

		function respond() {
			$('.hero').height($(window).innerHeight());
			$('.leaves-container').height($('.gallery-title-container').height());
			var width = $(window).width();
			
			if (width <= 568) {
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
			console.log(target);
			console.log(target.offset().top);
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-$('#nav-bar').height()
				}, 1000);
				return false;
			}
		}
	});
}
//var stickyOffset = $('.sticky').offset().top;
//
//$(window).scroll(function () {
//	var sticky = $('.sticky'),
//		scroll = $(window).scrollTop() + $('#nav-bar').height() + sticky.height() + 110;
//	
//	if (scroll >= stickyOffset) sticky.addClass('fixed');
//	else sticky.removeClass('fixed');
//
//});
	$(window).on("orientationchange",function(){
 event.stopPropagation();
}); 
	$('#main-nav ul li a').on('click',function(){
	$('#main-nav').removeClass('in');
	
});

}(jQuery));