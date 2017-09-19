$(function () {
	var $inventory = $('.inventory-box');

	var note = null;
	var noteBoxSelect = null;

	var photo = null;
	var photoBoxSelect = null;

	// Selecting a note
	var $noteSelect = $('.noteSelect');
	$noteSelect.on('click', function (event) {
		console.log($(this).html());
		if (note === null) {
		note = $(this);
		note.css('border', 'solid yellow 2px');
		}
	});

	// Placing the note
	var $noteBoxes = $('.note');
	$noteBoxes.on('click', function (event) {
		noteBoxSelect = $(this);
		note.hide();

		if (note !== null) {
			noteBoxSelect.html(note.html());
			note.css('border', 'none');
			noteBoxSelect.css('background-color', note.css('background-color'));
			note = null; // Resets so user can pick again
		}
	});


	var $noteButton = $('#noteButton');
	$noteButton.on('click', function (event) {
		checkNotesVaild($noteBoxes, $noteSelect);
	});


	// Selecting a photo
	var $photoSelect = $('.photoSelect');
	$photoSelect.on('click', function (event) {
		console.log('SELECTED');
		console.log($(this).html());
		if (photo === null) {
			photo = $(this);
			photo.css('border', 'solid yellow 2px');
			photo = null;
		}
	});

	// Placing the photo
	var $photoBoxes = $('.photo');
	$photoBoxes.on('click', function (event) {
		photoVoxSelect = $(this);
		photo.hide();

		if (note !== null) {
			photoBoxSelect.html(photo.html());
			photo.css('border', 'none');
			photoBoxSelect.css('background-color', photo.css('background-color'));
		}
	});

	var $photoButton = $('#photoButton');
	$photoButton.on('click', function (event) {
		checkPhotosVaild($photoBoxes, $photoSelect);
	});

});

// Checks that the photos that have been ordered properly
function checkPhotosValid ($photoBoxes, $photoSelect) {

}

// Checks that the notes have been ordered properly
function checkNotesVaild (noteBoxes, noteSelect) {
	if (noteBoxes.eq(4).html() === 'Academy standup' && 
		noteBoxes.eq(1).html() === 'Sparta day' &&
		noteBoxes.eq(3).html() === 'Client visit') {
		makeAlert('Correct! Here is a thing!');
		
	} else {
		noteSelect.show();
		noteBoxes.html('').css('background-color', 'brown');
		makeAlert('Incorrect! Try again!');

	} 
}

// Makes an alert from the text given
function makeAlert (text) {
	alert(text);
}



