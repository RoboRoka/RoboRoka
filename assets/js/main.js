$(document).ready(function(){
	var height = $(window).height()/2;
	var left = $('.hand-left');
	var right = $('.hand-right');

	function calculateStuff() {
		var scroll = $(window).scrollTop();

		// Let's limit the values of scroll we'll use...
		if (scroll < 0) {
			scroll = 0;
		}
		if (scroll > 360) {
			scroll = 360;
		}

		if ($(window).width() < 768) {
			scroll = 0;
		}

		// Factor will go from 0.0 to 1.0, so it's
		// easier to use in calculations
		var factor = scroll / 360;

		// Don't do the rotations and translations if the screen is
		// too narrow or high
		if (scroll < height) {
			left.css({
				'-ms-transform': 'rotate(' + (scroll/3.90)*(-1) + 'deg)',
				'transform': 'rotate(' + (scroll/3.90)*(-1) + 'deg)',
				'-webkit-transform': 'rotate(' + (scroll/3.90)*(-1) + 'deg)',
				'-moz-transform': 'rotate(' + (scroll/3.90)*(-1) + 'deg)'
			});

			right.css({
				'-ms-transform': 'rotate(' + (scroll/3.90) + 'deg)',
				'-moz-transform': 'rotate(' + (scroll/3.90) + 'deg)',
				'-webkit-transform': 'rotate(' + (scroll/3.90) + 'deg)',
				'transform': 'rotate(' + (scroll/3.90) + 'deg)'
			});

			// calculate the offset of the button as a function of the
			// windows width...
			var right_offset = factor * $(window).width() / 12;
			$(".right-btn").css({
				'-ms-transform': 'translateX(' + right_offset + 'px)',
				'-webkit-transform': 'translateX(' + right_offset + 'px)',
				'-moz-transform': 'translateX(' + right_offset + 'px)',
				'transform': 'translateX(' + right_offset + 'px)'
			});

			// calculate the offset of the button as a function of the
			// windows width...
			var right_far_offset = factor * $(window).width() / 10;
			$(".right-far-btn").css({
				'-ms-transform': 'translateX(' + right_far_offset + 'px)',
				'-moz-transform': 'translateX(' + right_far_offset + 'px)',
				'-webkit-transform': 'translateX(' + right_far_offset + 'px)',
				'transform': 'translateX(' + right_far_offset + 'px)'
			});

			// calculate the offset of the button as a function of the
			// windows width...
			var left_offset = -factor * $(window).width() / 12;
			$(".left-btn").css({
				'-ms-transform': 'translateX(' + left_offset + 'px)',
				'-webkit-transform': 'translateX(' + left_offset + 'px)',
				'-moz-transform': 'translateX(' + left_offset + 'px)',
				'transform': 'translateX(' + left_offset + 'px)'
			});

			// calculate the offset of the button as a function of the
			// windows width...
			var left_far_offset = -factor * $(window).width() / 10;
			$(".left-far-btn").css({
				'-ms-transform': 'translateX(' + left_far_offset + 'px)',
				'-moz-transform': 'translateX(' + left_far_offset + 'px)',
				'-webkit-transform': 'translateX(' + left_far_offset + 'px)',
				'transform': 'translateX(' + left_far_offset + 'px)'
			});

			$("#header").css({
				'-ms-transform': 'translateY(' + (scroll/8)*(-1) + 'px)',
				'-moz-transform': 'translateY(' + (scroll/8)*(-1) + 'px)',
				'-webkit-transform': 'translateY(' + (scroll/8)*(-1) + 'px)',
				'transform': 'translateY(' + (scroll/8)*(-1) + 'px)'
			});

			$(".nav-btn").css({
				'-ms-transform': 'translateY(' + (scroll/16) + 'px)',
				'-moz-transform': 'translateY(' + (scroll/16) + 'px)',
				'-webkit-transform': 'translateY(' + (scroll/16) + 'px)',
				'transform': 'translateY(' + (scroll/16) + 'px)'
			});
		}
	}

	$(window).scroll(function() {
		calculateStuff();
	});

	$(window).resize(function() {
		calculateStuff();
	})
});
