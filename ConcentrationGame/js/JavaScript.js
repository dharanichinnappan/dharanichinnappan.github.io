function startNewGame() {
	window.firstDiv = '';
	window.secondDiv = '';
	window.click = 0;
	window.moves = 0;
	window.matchedDiv = [];
	var divs = document.getElementsByClassName("tile");
	var length = divs.length;
	for (var i = 0; i < length; i++) {
		divs[i].style.backgroundImage = 'url("img/question_mark.png")';
		
		;
	}
	window.backgroundImages = [ 'img/img_1.jpg', 'img/img_1.jpg',
			'img/img_2.jpg', 'img/img_2.jpg', 'img/img_3.png',
			'img/img_3.png', 'img/img_4.jpg', 'img/img_4.jpg',
			'img/img_5.jpg', 'img/img_5.jpg', 'img/img_6.png',
			'img/img_6.png', 'img/img_7.jpg', 'img/img_7.jpg',
			'img/img_8.jpg', 'img/img_8.jpg' ];
	window.backgroundImages = shuffle();
	document.getElementById('greetings').innerHTML='';
	document.getElementById('totalMoves').innerHTML='';
	console.log(window.backgroundImages);

}

function shuffle() {
	for (var i = 1; i < 17; i++) {
		console.log("setting")
		$("#card-" + i).flip({
			axis : "y", // y or x
			reverse : false, // true and false
			trigger : "manual", // click, hover or manual
			speed : 500
		});
	}
	var currentIndex = window.backgroundImages.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = window.backgroundImages[currentIndex];
		window.backgroundImages[currentIndex] = window.backgroundImages[randomIndex];
		window.backgroundImages[randomIndex] = temporaryValue;

	}

	return window.backgroundImages;
}
// Used like so
function show(divId) {
	if (window.click == 1 && window.firstDiv == divId) {
	} else if (!window.matchedDiv.includes(divId) && window.secondDiv == '') {

		console.log("already matched");
		window.moves = window.moves + 1;
		var id = divId.substring(5);
		
		console.log(id + " div new id that is clicked")
		

		if (window.firstDiv != '') {
			console.log("setting secondiv value");
			window.secondDiv = divId;
			console.log(window.secondDiv + "is the second div");
		}
		if (window.firstDiv == '') {
			console.log("setting  firstdiv value");
			window.firstDiv = divId;
			console.log(window.firstDiv + "is the first div");
		}
		console.log('back'+id);
		console.log(document.getElementById('back'+id));
		console.log(window.backgroundImages[id - 1]);
		$("#" + divId).flip(true);
		/*
		 * setTimeout(function() { console.log("flipping"); $("#" +
		 * divId).flip(true);
		 *  }, 2000);
		 */
		
		document.getElementById('back'+id).style.backgroundImage = 'url("'
				+ window.backgroundImages[id -1] + '")';
		window.click = window.click + 1;
		check();
		

	}

}
function check() {
	console.log(window.click);
	if (window.click == 2) {
		console.log('clicked two times');
		console.log(window.firstDiv, window.secondDiv + " is 1st and 2nd div");
		console.log(window.backgroundImages[window.firstDiv.substring(5) - 1],
				window.backgroundImages[window.secondDiv.substring(5) - 1]);
		if (window.backgroundImages[window.firstDiv.substring(5) - 1] == window.backgroundImages[window.secondDiv
				.substring(5) - 1]) {
			console.log("same");
			disable();

		} else {
			console.log("different");
			console.log(window.firstDiv,window.secondDiv);
			setTimeout(function() {
				console.log("so flipping back");				
				$("#" + window.firstDiv).flip(false);
				$("#" + window.secondDiv).flip(false);
				window.firstDiv = '';
				window.secondDiv = '';
				window.click = 0;
			}, 2000);			
			
		}

	}
}
function disable() {
	if (window.click == 2) {
		setTimeout(
				function disableDiv() {
					console.log(window.firstDiv);
					console.log(secondDiv);
					console.log(document.getElementById(window.firstDiv),
							document.getElementById(window.secondDiv));
					// window.firstDiv.substring(5)
					document.getElementById('back'+window.firstDiv.substring(5)).style.backgroundImage = 'url("img/match.jpg")';
					document.getElementById('back'+window.secondDiv.substring(5)).style.backgroundImage = 'url("img/match.jpg")';
					document.getElementById(window.firstDiv).disabled = true;
					document.getElementById(window.secondDiv).disabled = true;
					window.matchedDiv.push(window.firstDiv, window.secondDiv);
					console.log(window.matchedDiv);
					if (window.matchedDiv.length == 16) {
						document.getElementById('greetings').innerHTML='Congratulations';
						document.getElementById('totalMoves').innerHTML='Total Moves:'+window.moves;
					}
					window.firstDiv = '';
					window.secondDiv = '';
					window.click = 0;
					;
				}, 2000);
	}
}
