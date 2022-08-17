$(function() {
		for (var i = 1; i < 4; i++) {
			console.log("setting")
			$("#card-"+i).flip({
				axis : "y", // y or x
				reverse : false, // true and false
				trigger : "manual", // click, hover or manual
				speed : 500
			});
		}
		
		

		setTimeout(function() {
			 $("#card-1").flip(true);
			$("#card-2").flip(true);
		}, 5000);

	});