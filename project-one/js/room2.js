$(function () {
	var $inventory = $('.inventory-box');

	var note = null;
	var noteboxSelect = null;

	// Selecting a note
	var $noteSelect = $('.noteSelect');
	$noteSelect.on('click', function (event) {
		console.log($(this).html());
		note = $(this);
		note.css('border', 'solid yellow 2px');
	});

	// Placing the note
	var $noteBoxes = $('.note');
	$noteBoxes.on('click', function (event) {
		noteboxSelect = $(this);
		note.hide();

		if (note !== null) {
			noteboxSelect.html(note.html());
			note.css('border', 'none');
			noteboxSelect.css('background-color', note.css('background-color'));
		}
	});

	var $noteButton = $('#noteButton');
	$noteButton.on('click', function (event) {
		checkNotesVaild($noteBoxes, $noteSelect);
	});

});


// Checks that the notes have been ordered properly
function checkNotesVaild(noteBoxes, noteSelect) {
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



