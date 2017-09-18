$(function () {
	var $inventory = $('.inventory-box');

	var note = null;

	var $noteSelect = $('.noteSelect');
	$noteSelect.on('click', function (event) {
		console.log($(this).html());
		note = $(this);
		note.css('border', 'solid yellow 2px');
	});

});