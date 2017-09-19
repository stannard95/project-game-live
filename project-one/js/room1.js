$(function () {
	var item1 = null;
	var item2 = null;
   var doorUnlocked = false;
   var time = 0;
   var $timer = $('#timer');
   
   increment();
   console.log(time);

   $('#room2Link').hide();
	var $inventory = $('.inventory-box');
   	$inventory.on('click', function(event) {
   		console.log('Clicked');

   		//Combining items
   		if ($(this).css('background-image') !== 'none') {

   			// If the item is java
   			if ($(this).attr('value') === 'java') {

   				makeAlert('The paper message reveals the word: java. \nMaybe its a password?');

   			} else {
   				$(this).css('border', 'solid yellow 2px');
   			}

            // Selects item 1
   			if (item1 === null) {
   				item1 = $(this);
   				console.log(item1.attr('value'));
   			
            } else {

               //Selects item 2 and attempts to combine
   				item2 = $(this);
   				console.log(item2.attr('value'));
   				combine(item1, item2);
   				item1 = null;
   				item2 = null;
   			}
   		}
   		
   	});

   	var $pencil = $('#pencilItem');
   	$pencil.on('click', function(event) {
   		console.log('yeah boi, pencil');
   		addItem($(this), $inventory);

   	});

   	var $paper = $('#paperItem');
   	$paper.on('click', function(event) {
   		console.log('yeah boi, paper');
   		addItem($(this), $inventory);
   	});

   	var $laptop = $('#laptopItem');
   	$laptop.on('click', function(event) {
   		console.log('yeah boi, laptop');
         makeForm('laptop');
   		
   	});

   	var $drawers = $('#drawersItem');
   	$drawers.one('click', function(event) {
   		console.log('yeah boi, drawers');
   		var $eraser = $('#eraserItem');
   		addItem($eraser, $inventory);
   	});

   	var $door = $('#door');
   	$door.on('click', function(event) {
   		console.log('yeah boi, door');
         if (doorUnlocked) {
            makeAlert('Proceed to the break room!');
            $('#room2Link').show();
            save();
            
           
         }
   	});

   	var $doorLock = $('#doorLock');
   	$doorLock .on('click', function(event) {
   		console.log('yeah boi, door lock');
         makeAlert('HINT: \nThe difference between two secrets...')
         makeForm('doorLock');
         doorUnlocked = true;

   	});

      var $whiteboard = $('#whiteboard');
      $whiteboard.on('click', function(event) {
         console.log('yeah boi, whiteboard');
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
});






// Produces a inout form with a button
function makeForm(choice) {
   makeAlert('Enter a password');
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


 // Checks that the door lock password is valid
function checkDoorInputValid(text) {
	if (text === '99271') {
		makeAlert('The door unlocks!');
	
   } else {
		makeAlert('The door remains locked');
	}
}

// Checks that the laptop password is valid
function checkLaptopInputValid(text) {
	if (text === 'java') {
		makeAlert('The alphabet might come in handy here...');
	
	} else if (text === '101221') {
		makeAlert('Welcome to your computer\nThe door lock is the (laptop password - message on the whiteboard)');
	
   } else {
		makeAlert('Wrong, try again.');
	}
}

// Adds an item to the inventory
function addItem (item, $inventory) {
	var inventoryCheck = checkInventoryFree($inventory);

	if (inventoryCheck === '') {
		makeAlert('Inventory is full');
	
	} else {
		inventoryCheck.css("background-image", item.css("background-image"));
		inventoryCheck.attr('value', item.attr('value'));
		makeAlert('You picked up a ' + inventoryCheck.attr('value'));
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

	// Combine pencil and paper for java message
   item1.css('border', 'solid black 2px');
   item2.css('border', 'solid black 2px');
	if (item1Value === 'pencil' && item2Value === 'paper' ||
		item1Value === 'paper' && item2Value === 'pencil') {

		makeAlert('You combined ' + item1Value + ' and ' + item2Value);
		
		item1.css('background-image', 'url(../images/room1/paperCombined.png)');
		item1.attr('value', 'java');
		item2.css('background-image', 'none');
		
	}  else {
      makeAlert('Sorry, that combination did not work');
   }

}


// Makes an alert from the text given
function makeAlert (text) {
	alert(text);
}