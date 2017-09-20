$(function () {

	var $tutorialButton = $('#tutorialButton');
	$tutorialButton.on('click', function (event) {
		console.log('valkla');
		makeMessage('Welcome to the game!\nPoint and click your way through sparta!' + 
			'\nPoint and click to solve puzzles. Find items and combine them to get through each section!' +
			'Answer riddles, use your logical mind to leave Sparta!');
	});
	var startButton = $('.button');

		// Creates a popup message
	function makeMessage(text) {
	   var containerBox = $("<div class=messageBox>");
	   var closeButton = $("<button id=closeButton>X</button>");
	   containerBox.append(closeButton);
	   containerBox.append(text);
	   $('body').append(containerBox);
	   closeButton.on('click', function (event) {
	      console.log('jim');
	      containerBox.remove();
	   });
	}

});