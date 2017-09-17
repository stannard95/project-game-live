$(function () {
	
	var $inventory = $('.inventory-box');
   	$inventory.on('click', function(event) {
   		console.log('Clicked');
   		addItem($(this), $inventory);
   	});
});


//Adds an item to the inventory
function addItem ($inventory) {
	var inventoryBox = $inventory.css('background-image');

	if (checkInventoryFree(inventoryBox)) {
		$inventory.css("background-image", "url(../images/key1.jpg)");
	
	} else {
		makeAlert('That place is already filled!');
	}
	
}


// Checks to see if the inventory space is alreayd filled
function checkInventoryFree(inventoryBox) {
	if (inventoryBox === 'none') {
		return true;
	
	} else {
		return false;
	}
}

//Makes an alert from the text given
function makeAlert(text) {
	alert(text);
}