
$(function () {
	var note = null;
	var noteBoxSelect = null;
	var photo = null;
	var photoBoxSelect = null;
	var $inventory = $('.inventory-box');
	var item1 = null;
	var item2 = null;

	var time = JSON.parse(localStorage['time']);
	console.log(time);

	var $timer = $('#timer');
	increment(time, $timer);
	function increment(time, $timer) {
      setTimeout(function(){
         time ++;
         var mins = Math.floor(time/10/60);
         var secs = Math.floor(time/10 % 60);
         var hours = Math.floor(time/10/60/60);
         var tenths = time % 10;
         if (mins < 10) {
            mins = '0' + mins;
         }

         if (secs < 10) {
            secs = '0' + secs;
         }
         $timer.html(hours + ':' + mins + ':' + secs + ':' + tenths + '0');
         increment(time, $timer);
      }, 100)
   
	}


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
		checkNotesVaild($inventory, $noteBoxes, $noteSelect);
	});


	// Selecting a photo
	var $photoSelect = $('.photoSelect');
	$photoSelect.on('click', function (event) {

		if (photo === null) {
			photo = $(this);
			photo.css('border', 'solid yellow 2px');
	
		}
	});

	// Placing the photo
	var $photoBoxes = $('#photo-container .photo');
	$photoBoxes.on('click', function (event) {
		photoBoxSelect = $(this);


		if (photo !== null) {
			photo.css('border', 'none');
			photoBoxSelect.css('background-color', 'transparent');
			photoBoxSelect.css('background-image', photo.css('background-image'));
			photo.hide();
			photo = null;

		}
	});

	var $photoButton = $('#photoButton');
	$photoButton.on('click', function (event) {
		checkPhotosValid($inventory, $photoBoxes, $photoSelect);
	});

	//Inventory
   	$inventory.on('click', function(event) {
   		console.log('Clicked');

   		//Combining items
   		if ($(this).css('background-image') !== 'none') {
   			if (item1 === null) {
   				item1 = $(this);
   				$(this).css('border', 'solid yellow 2px');
   			}

   			else {
   				item2 = $(this);
   				combineKeys(item1, item2);
   			}
   		} 

   		else {
   				
   		}   
   	});
});


function combineKeys(item1, item2) {
	item1.css('background-image', 'url(../images/room1/key1.jpg)');
	item2.hide();
	item1.css('border', 'solid black 2px');

}

// Checks that the photos that have been ordered properly
function checkPhotosValid (inventory, photoBoxes, photoSelect) {
	var location = 'url("file:///Users/tech-a67/Documents/projects/project-one/images/room2/'
	var photo1Local = location + "ev1.png\"\)";
	var photo2Local = location + "ev2.png\"\)";
	var photo3Local = location + "ev3.png\"\)";
	var photo4Local = location + "ev4.png\"\)";
	var photo5Local = location + "ev5.png\"\)";
	console.log(photo5Local);

	if (photoBoxes.eq(0).css('background-image') 
		=== photo1Local 
		&& photoBoxes.eq(1).css('background-image') 
		=== photo2Local
		&& photoBoxes.eq(2).css('background-image') 
		=== photo3Local
		&& photoBoxes.eq(3).css('background-image') 
		=== photo4Local
		&& photoBoxes.eq(4).css('background-image') 
		=== photo5Local) {

		makeAlert('CORRECT, EHMGAGRD');


		inventory.eq(0).css('background-image', 'url(../images/room2/key1.png)');
		
	
	} else {
		photoSelect.show();
		photoBoxes.css('background-color', 'brown');
		photoBoxes.css('background-image', 'none');
		makeAlert('Incorrect! Have a look at the wall if you need help!');
	}

}

// Checks that the notes have been ordered properly
function checkNotesVaild (inventory, noteBoxes, noteSelect) {
	if (noteBoxes.eq(4).html() === 'Academy standup' && 
		noteBoxes.eq(1).html() === 'Sparta day' &&
		noteBoxes.eq(3).html() === 'Client visit') {
		makeAlert('Correct! Here is a key part!');
		inventory.eq(1).css('background-image', 'url(../images/room2/key3.png)');

		
	} else {
		noteSelect.show();
		noteBoxes.html('').css('background-color', 'brown');
		makeAlert('Incorrect! Have a look at the wall if you need help!');

	} 
}

// Makes an alert from the text given
function makeAlert (text) {
	alert(text);
}

function makeTime(timeSaved) {
	var hours = parseInt(timeSaved[0]);
	var mins = parseInt(timeSaved[1]);
	var secs = parseInt(timeSaved[2]);
	var tenth = parseInt(timeSaved[3]);
}




