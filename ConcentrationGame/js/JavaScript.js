function startNewGame() {
	window.firstDiv = '';
	window.secondDiv = '';
	window.click = 0;
	window.moves = 0;
	window.matchedDiv = [];
	var divs = document.getElementsByClassName("tile");
	var length = divs.length;
	for (var i = 0; i < length; i++) {
		divs[i].style.backgroundImage = 'url("img/black_checked.png")';
		;
	}
	window.backgroundImages = [ 'img/bulb_1.jpg', 'img/bulb_1.jpg',
			'img/dice_1.jpg', 'img/dice_1.jpg', 'img/football_1.jpg',
			'img/football_1.jpg', 'img/heart_1.png', 'img/heart_1.png',
			'img/leaf_1.jpg', 'img/leaf_1.jpg', 'img/lucky_1.png',
			'img/lucky_1.png', 'img/mushroom_1.jpg', 'img/mushroom_1.jpg',
			'img/rainbow_1.png', 'img/rainbow_1.png' ];
	window.backgroundImages = shuffle();
	console.log(window.backgroundImages);

}

function shuffle() {

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
		var id = divId.substring(3);
		console.log(id + " div id that is clicked")
		if (window.firstDiv != '') {
			console.log("setting secondiv value");
			window.secondDiv = divId;
			console.log(window.secondDiv + "is the second div");
		}
		if (window.firstDiv == '') {
			console.log("setting firstdiv value");
			window.firstDiv = divId;
			console.log(window.firstDiv + "is the first div");
		}
		console.log(document.getElementById(divId));
		document.getElementById(divId).style.backgroundImage = 'url("'
				+ window.backgroundImages[id - 1] + '")';
		window.click = window.click + 1;
		check();
	}

}
function check() {
	console.log(window.click);
	if (window.click == 2) {
		console.log('clicked two times');
		console.log(window.firstDiv, window.secondDiv + " is 1st and 2nd div");
		console.log(window.backgroundImages[window.firstDiv.substring(3) - 1],
				window.backgroundImages[window.secondDiv.substring(3) - 1]);
		if (window.backgroundImages[window.firstDiv.substring(3) - 1] == window.backgroundImages[window.secondDiv
				.substring(3) - 1]) {
			console.log("same");
			disable();

		} else {
			console.log("different");
			reverse();
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
					document.getElementById(window.firstDiv).style.backgroundColor = 'black';
					document.getElementById(window.secondDiv).style.backgroundColor = 'black';
					document.getElementById(window.firstDiv).style.backgroundImage = '';
					document.getElementById(window.secondDiv).style.backgroundImage = '';
					// setTimeout(dirty, 3000);
					document.getElementById(window.firstDiv).disabled = true;
					document.getElementById(window.secondDiv).disabled = true;
					window.matchedDiv.push(window.firstDiv, window.secondDiv);
					console.log(window.matchedDiv);
					if (window.matchedDiv.length == 16) {
						alert("congratulations");
					}
					window.firstDiv = '';
					window.secondDiv = '';
					window.click = 0;
					;
				}, 2000);
	}
}

function reverse() {
	if (window.click == 2) {
		setTimeout(
				function disableDiv() {
					console.log(window.firstDiv);
					console.log(window.secondDiv);
					console.log(document.getElementById(window.firstDiv),
							document.getElementById(window.secondDiv));
					document.getElementById(window.firstDiv).style.backgroundImage = 'url("img/black_checked.png")';
					document.getElementById(window.secondDiv).style.backgroundImage = 'url("img/black_checked.png")';
					// setTimeout(dirty, 3000);
					document.getElementById(window.firstDiv).disabled = true;
					document.getElementById(window.secondDiv).disabled = true;
					window.firstDiv = '';
					window.secondDiv = '';
					window.click = 0;
					;
				}, 3000);
	}
}