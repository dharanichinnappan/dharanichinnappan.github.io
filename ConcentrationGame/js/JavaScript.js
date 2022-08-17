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
			'img/img_2.jpg', 'img/img_2.jpg', 'img/img_3.png', 'img/img_3.png',
			'img/img_4.jpg', 'img/img_4.jpg', 'img/img_5.jpg', 'img/img_5.jpg',
			'img/img_6.png', 'img/img_6.png', 'img/img_7.jpg', 'img/img_7.jpg',
			'img/img_8.jpg', 'img/img_8.jpg' ];
	window.backgroundImages = shuffle();
	document.getElementById('greetings').innerHTML = '';
	document.getElementById('totalMoves').innerHTML = '';

}

function shuffle() {
	for (var i = 1; i < 17; i++) {
		$("#card-" + i).flip({
			axis : "y",
			reverse : false,
			trigger : "manual",
			speed : 500
		});
	}
	var currentIndex = window.backgroundImages.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = window.backgroundImages[currentIndex];
		window.backgroundImages[currentIndex] = window.backgroundImages[randomIndex];
		window.backgroundImages[randomIndex] = temporaryValue;

	}

	return window.backgroundImages;
}

function show(divId) {
	if (window.click == 1 && window.firstDiv == divId) {
	} else if (!window.matchedDiv.includes(divId) && window.secondDiv == '') {

		window.moves = window.moves + 1;
		var id = divId.substring(5);

		if (window.firstDiv != '') {
			window.secondDiv = divId;

		}
		if (window.firstDiv == '') {
			window.firstDiv = divId;
		}

		$("#" + divId).flip(true);

		document.getElementById('back' + id).style.backgroundImage = 'url("'
				+ window.backgroundImages[id - 1] + '")';
		window.click = window.click + 1;
		check();

	}

}
function check() {
	if (window.click == 2) {

		if (window.backgroundImages[window.firstDiv.substring(5) - 1] == window.backgroundImages[window.secondDiv
				.substring(5) - 1]) {
			disable();

		} else {
			setTimeout(function() {
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
					document.getElementById('back'
							+ window.firstDiv.substring(5)).style.backgroundColor = 'white';
					document.getElementById('back'
							+ window.secondDiv.substring(5)).style.backgroundColor = 'white';
					document.getElementById('back'
							+ window.firstDiv.substring(5)).style.backgroundImage = 'url("img/match.jpg")';
					document.getElementById('back'
							+ window.secondDiv.substring(5)).style.backgroundImage = 'url("img/match.jpg")';
					
					document.getElementById(window.firstDiv).disabled = true;
					document.getElementById(window.secondDiv).disabled = true;
					window.matchedDiv.push(window.firstDiv, window.secondDiv);
					if (window.matchedDiv.length == 16) {
						document.getElementById('greetings').innerHTML = 'Congratulations';
						document.getElementById('totalMoves').innerHTML = 'Total Moves:'
								+ window.moves;
					}
					window.firstDiv = '';
					window.secondDiv = '';
					window.click = 0;
					;
				}, 2000);
	}
}
