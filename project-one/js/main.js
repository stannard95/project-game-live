
$(function () {
	
	var $inventory = $('.inventory-box');
   	$inventory.on('click', function(event) {
   		console.log('Clicked');
   		addItem($(this), $inventory);
   	});
});


function addItem ($inventory) {
	var inventoryBox = $inventory.css('background-image');

	if (checkInventoryFree(inventoryBox)) {
	$inventory.css('background-image','url(../project-one/images/pencil.png)');
	
	} else {
		makeAlert('That place is already filled!');
	}
	
}

function checkInventoryFree(inventoryBox) {
	if (inventoryBox === 'none') {
		return true;
	
	} else {
		return false;
	}
}

function makeAlert(text) {
	alert(text);
}