$(function () {
	
	var item1 = null;
	var item2 = null;
	var $inventory = $('.inventory-box');
   	$inventory.on('click', function(event) {
   		console.log('Clicked');

   		//Combining items
   		if ($(this).css('background-image') !== 'none') {
   			$(this).css('border', 'solid yellow 2px');
   			if (item1 === null) {
   				item1 = $(this);
   				console.log(item1.attr('value'));
   			}
   			else {
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
   	});

   	var $doorLock = $('#doorLock');
   	$doorLock .on('click', function(event) {
   		console.log('yeah boi, door lock');
   	});
});


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
	if (item1Value === 'pencil' && item2Value === 'paper' ||
		item1Value === 'paper' && item2Value === 'paper') {

		makeAlert('You combined ' + item1Value + ' and ' + item2Value);
		item1.css('border', 'solid black 2px');
		item2.css('border', 'solid black 2px');

		item1.css('background-image', 'url(../images/room1/paperCombined.png)');
		item1.attr('value', 'java');
		item2.css('background-image', 'none');
		

	}

}


//Makes an alert from the text given
function makeAlert (text) {
	alert(text);
}