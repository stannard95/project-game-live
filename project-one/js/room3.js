
$(function () {

	$('#room3Link').hide();
	var simonContainer = $('#wire-container');
	simonContainer.hide();

	var $inventory = $('.inventory-box');

	var time = JSON.parse(localStorage['time']);

	var $timer = $('#timer');
	increment(time, $timer);

	var $simon = $('#simon');
	changeMouse($simon);

	$simon.on('click', function (event) {
		simonContainer.show();


	});


	// Timer function
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
});

// change the mouse cursor when hovering over an item
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
      console.log('jim');
      containerBox.remove();
   });
}







