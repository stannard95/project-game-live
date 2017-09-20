
$(function () {

	$('#room3Link').hide();
	var simonContainer = $('#wire-container');
	simonContainer.hide();

	var $inventory = $('.inventory-box');

	var time = JSON.parse(localStorage['time']);
	var countdown = 50;
	var $countdownHeading = $('#countdown');

	var $timer = $('#timer');
	increment(time, $timer);

	var $simon = $('#simon');
	changeMouse($simon);

	var reset = $('#resetButton');
	reset.on('click', function (event) {
		startWireGame();
		countdown = 50;
	});

	$simon.on('click', function (event) {
		simonContainer.show();
		startWireGame();


	});

	function stopTime() {
		clearTimeout(timestop);
	}

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

	function decrement() {
		timestop = setTimeout(function() { 

         countdown --;
         var secs = Math.floor(countdown / 10 % 60);
         var tenths = countdown % 10;

         if (secs < 10) {
            secs = '0' + secs;
         }

         if (secs <= 0 && tenths <= 0) {
         	$countdownHeading.html(secs + ':' + tenths + '0');
         	clearTimeout(timestop);	
         }

         else {
        	 $countdownHeading.html(secs + ':' + tenths + '0');
        	 decrement();
     	}
        
      }, 100)
	}

	function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
	
	

	function startWireGame() {
		decrement(time);
		var colors = ['red', 'yellow', 'green', 'blue', 'black'];

		var $wireSelect = $('.wireS');
		changeMouse($wireSelect);

		// Random colors for top row
		colors = shuffleArray(colors);
		for (var i = 0; i < $wireSelect.length; i++) {
			$wireSelect.eq(i).css('background-color', colors[i]);

		}

		var $wireSlot = $('.wireSlot');
		changeMouse($wireSlot);
		var $wirePlace = $('.wire');

		// Random colors for bottom row
		colors = shuffleArray(colors);
		for (var i = 0; i < $wirePlace.length; i++) {
			$wirePlace.eq(i).css('background-color', colors[i]);

		}

		var wireSelected = null;

		//Countdown

		$wireSelect.on('click', function (event) {
			console.log('select');
			wireSelected = $(this);
		});

		$wireSlot.on('click', function (event) {
			console.log('slot');
			if (wireSelected !== null) {
				$(this).css('background-color', wireSelected.css('background-color'));
			}

		});

		$wirePlace.on('click', function (event) {
			console.log('place');
		});
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







