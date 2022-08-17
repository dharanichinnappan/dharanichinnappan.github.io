function myfunction() {
	var rightSlideDiv = document.getElementById("rightSlide");
	rightSlideDiv.style.position = "relative";
	var distance = 300;
	rightSlideDiv.style.right = distance + "px";

	var leftSlideDiv = document.getElementById("leftSlide");
	leftSlideDiv.style.position = "relative";
	leftSlideDiv.style.left = distance + "px";

	var topSlideDiv = document.getElementById("topSlide");
	topSlideDiv.style.position = "relative";
	topSlideDiv.style.top = distance + "px";

	var bottomSlideDiv = document.getElementById("bottomSlide");
	bottomSlideDiv.style.position = "relative";
	bottomSlideDiv.style.bottom = distance + "px";

	var gap = 2;

	var timer = window.setInterval(function() {
		rightSlideDiv.style.right = distance + "px";
		leftSlideDiv.style.left = distance + "px";
		topSlideDiv.style.top = distance + "px";
		bottomSlideDiv.style.bottom = distance + "px";
		if (distance - gap < 0) {
			distance = 0;
		} else {
			distance -= gap;
		}
		if (distance == 0) {
			clearInterval(timer);
		}

	}, 1);
}
$(window).on(
		'scroll.myfunction',
		function() {
			var hT = $('#topSlide').offset().top,
			 hH = $('#topSlide').outerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
			//console.log(hT,wS,hT-wS);
			//(hT-wS)<600
			
		   if (wS > (hT+hH-wH)) {
			 //console.log(hT,wS,hT-wS);
				myfunction();
				$(window).off('scroll.myfunction');

			}
		});
