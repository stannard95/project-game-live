$(function () {
	var item1 = null;
	var item2 = null;
   var doorUnlocked = false;
   var time = 0;
   var $timer = $('#timer');
 
   increment();

   $('#room2Link').hide();
	var $inventory = $('.inventory-box');
	$inventory.on('click', function(event) {

		//Combining items
		if ($(this).css('background-image') !== 'none') {
			// If the item is java
			if ($(this).attr('value') === 'java') {
				makeMessage('The paper message reveals the word: java. \nMaybe its a password?');

			} else {
				$(this).css('border', 'solid yellow 2px');
			}
         // Selects item 1
			if (item1 === null) {
				item1 = $(this);
		
			
         } else {
            //Selects item 2 and attempts to combine
				item2 = $(this);
	
				combine(item1, item2);
				item1 = null;
				item2 = null;
			}
		}
		
   });

	var $pencil = $('#pencilItem');
	changeMouse($pencil);

	$pencil.on('click', function(event) {
		addItem($(this), $inventory);
		
	});

	var $paper = $('#paperItem');
	changeMouse($paper);

	$paper.on('click', function(event) {
		addItem($(this), $inventory);
	});

	var $laptop = $('#laptopItem');
	changeMouse($laptop);

	$laptop.on('click', function(event) {
      	makeForm('laptop');
      	
		
	});

	var $drawers = $('#drawersItem');
	changeMouse($drawers);

	$drawers.one('click', function(event) {
		var $eraser = $('#eraserItem');
		addItem($eraser, $inventory);
	});


	var $door = $('#door');
	changeMouse($door);

	$door.on('click', function(event) {
      if (doorUnlocked) {
         $('#room2Link').show();
         save();
      }
      else {
      	makeMessage('The door is locked, work out the password');
      }
	});

	var $doorLock = $('#doorLock');
	changeMouse($doorLock);

	$doorLock.on('click', function(event) {
      makeMessage('Enter a password.' + '\nHINT: \nThe difference between two secrets...');
      makeForm('doorLock');
     

	});

   var $whiteboard = $('#whiteboard');
   changeMouse($whiteboard);

   $whiteboard.on('click', function(event) {
     	makeMessage('A mess on the wall, maybe there\'s something behind it?');
      if (item1.attr('value') === 'eraser') {
         $whiteboard.css('background-image', 'url(../images/room1/message.png)');
         item1.css('border', 'solid black 2px');
         item1 = null;
      }
   });

function save() {
   var JSONReadyUsers = JSON.stringify(time);
   localStorage.setItem('time', JSONReadyUsers);
}

   // Timer increases
function increment() {
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
         increment();
      }, 100)
}


 // Checks that the door lock password is valid
function checkDoorInputValid(text) {
	if (text === '99271') {
		makeMessage('The door unlocks!');
		 doorUnlocked = true;
	
   } else {
		makeMessage('The door remains locked');
	}
}

//Change the mouse cursor when hovering over an item
function changeMouse(item) {
	item.hover(function() {
		    $(this).css('cursor','pointer');
		}, function() {
		    $(this).css('cursor','auto');
	});
}

// Creates a popup message
function makeMessage(text) {
   var containerBox = $("<div class=messageBox>");
   var closeButton = $("<button id=closeButton>X</button>")
   containerBox.append(text);
   containerBox.append(closeButton);
   $('.main-container').append(containerBox);
   closeButton.on('click', function (event) {
     	containerBox.remove();
   		containerBox.fadeOut();

   });
}


// Produces a inout form with a button
function makeForm(choice) {
   var $form = $("<form></form>");
         $form.append("<input type='text' class='formInput'/>");
         $form.append($("<button class=enterButton>Enter</button>"));
         $('.main-container').append($form);
         $('.enterButton').on('click', function (event) {
            event.preventDefault();
             var input = $(".formInput").val();
            if (choice === 'laptop') {
               checkLaptopInputValid(input);
          
            } else if (choice === 'doorLock') {
               checkDoorInputValid(input);
            }

             $form.remove();
         });

}



// Checks that the laptop password is valid
function checkLaptopInputValid(text) {
	if (text === 'java') {
		makeMessage('The alphabet positions might come in handy here...');
	
	} else if (text === '101221') {
		makeMessage('Welcome to your computer\nThe door lock is the (laptop password - message on the whiteboard)');
	
   } else {
		makeMessage('Wrong, try again.');
	}
}

// Adds an item to the inventory
function addItem (item, $inventory) {
	var inventoryCheck = checkInventoryFree($inventory);

	if (inventoryCheck === '') {
		makeMessage('Inventory is full');
	
	} else {
		inventoryCheck.css("background-image", item.css("background-image"));
		inventoryCheck.attr('value', item.attr('value'));
		makeMessage('You picked up an ' + inventoryCheck.attr('value'));
		item.hide();
	}
}


// Checks to see if the inventory space is alreayd filled
function checkInventoryFree ($inventory) {
	for (var i = 0; i < $inventory.length; i++) {
		var inventoryBox = $inventory.eq(i);

		if (inventoryBox.css("background-image") === 'none') {
			break;
		
		} else {
			inventoryBox = '';
		}
	}

	return inventoryBox;
	
}


// combines two objects together
function combine (item1, item2) {
	var item1Value = item1.attr('value');
	var item2Value = item2.attr('value');

	// Combines pencil and paper for java message
   item1.css('border', 'solid black 2px');
   item2.css('border', 'solid black 2px');
	if (item1Value === 'pencil' && item2Value === 'paper' ||
		item1Value === 'paper' && item2Value === 'pencil') {

		makeMessage('You combined ' + item1Value + ' and ' + item2Value);
		
		item1.css('background-image', 'url(../images/room1/paperCombined.png)');
		item1.attr('value', 'java');
		item2.css('background-image', 'none');
		
	}  else {
      makeMessage('Sorry, that combination did not work');
   }

}


});


