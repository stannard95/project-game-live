
$(function () {

	var winState = $('#winState');
	winState.hide();

	$('#room3Link').hide();
	var simonContainer = $('#wire-container');
	simonContainer.hide();

	var $inventory = $('.inventory-box');
	var power = false;

	var time = JSON.parse(localStorage['time']);
	var countdown = 70;
	var $countdownHeading = $('#countdown');

	var $timer = $('#timer');
	increment(time, $timer);

	var $simon = $('#simon');
	changeMouse($simon);

	var $start = $('#startButton');
	changeMouse($start);
	$start.on('click', function (event) {
		startWireGame();
		countdown = 70;
	});

	var $reset = $('#resetButton');
	changeMouse($reset);
	$reset.on('click', function (event) {
		countdown = 70;
		var secs = Math.floor(countdown / 10 % 60);
        var tenths = countdown % 10;
        $countdownHeading.html('0' + secs + ':' + tenths + '0');
        clearTimeout(timestop);
	});

	var $instructions = $('#instructButton');
	changeMouse($instructions);
	$instructions.on('click', function (event) {
		makeMessage('Click on the colored boxes to connect the wires to it\'s right color.' +
			'\n\n\nYou have 7 seconds to get it back together so you can turn the power back on.' +
			'\nPress start to begin!');
	});

	var $close = $('#closeButton');
	changeMouse($close);
	$close.on('click', function (event) {
		simonContainer.hide();
		clearTimeout(timestop);
		countdown = 70;
		var secs = Math.floor(countdown / 10 % 60);
        var tenths = countdown % 10;
        $countdownHeading.html('0' + secs + ':' + tenths + '0');
		
	});

	var $doorPad = $('#doorPad');
	changeMouse($doorPad);
	$doorPad.on('click', function (event) {
		makeForm('1');

	});


	$simon.on('click', function (event) {
		simonContainer.show();


	});

	// Produces a inout form with a button
	function makeForm(choice) {
	   var $form = $("<form></form>");
	         $form.append("<input type='text' class='formInput'/>");
	         $form.append($("<button class=enterButton>Enter</button>"));
	         $('.main-container').append($form);
	         $('.enterButton').on('click', function (event) {
	            event.preventDefault();
	            console.log(power);
	             var input = $(".formInput").val();
	             if (power && input === '8138') {
	             	winState.show();
	             	$('#finalTime').html('Your final time: ' + $timer.html());
	             	$('.main-container').hide();
	             	clearTimeout(finaltime);
	             
	             }  else if(power && input !== '8138') {
	             	makeMessage('Try again!');

	             }

	             else if (!power) {
	             	makeMessage('You need to turn the power on!');
	             }

	             $form.remove();
	         });

	}

	function stopTime() {
		clearTimeout(timestop);
	}

	// Timer function
	function increment(time, $timer) {
      finaltime = setTimeout(function(){
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
         	makeMessage('You ran out of time!');
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

			$('.wireSlot').css('background-color', 'brown');
			// Random colors for bottom row
			colors = shuffleArray(colors);
			for (var i = 0; i < $wirePlace.length; i++) {
				$wirePlace.eq(i).css('background-color', colors[i]);

			}
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
	
		
		// Checks if the player has won after each move
	function checkWin($wire, $wireSlot) {
		var wire1 = $wire.eq(0).css('background-color');
		var wire2 = $wire.eq(1).css('background-color');
		var wire3 = $wire.eq(2).css('background-color');
		var wire4 = $wire.eq(3).css('background-color');
		var wire5 = $wire.eq(4).css('background-color');

		var wireSlot1 = $wireSlot.eq(0).css('background-color');
		var wireSlot2 = $wireSlot.eq(1).css('background-color');
		var wireSlot3 = $wireSlot.eq(2).css('background-color');
		var wireSlot4 = $wireSlot.eq(3).css('background-color');
		var wireSlot5 = $wireSlot.eq(4).css('background-color');

		if (wire1 === wireSlot1 && wire2 === wireSlot2 &&
			wire3 === wireSlot3 && wire4 === wireSlot4 &&
			wire5 === wireSlot5) {
			$('#wire-container').css('border', 'solid gold 6px');
			clearTimeout(timestop);
			power = true;
			$('.main-container').css('background-image', 'url(../images/room3/room3.png)');
			makeMessage('You turned the power on!');
		}

		console.log(wire1 + ',' + wireSlot1);
	}


	// Starts the wire game
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
			wireSelected.css('border', 'solid gold 4px');
		});

		$wireSlot.on('click', function (event) {
			console.log('slot');
			if (wireSelected !== null) {
				wireSelected.css('border', 'solid black 2px');
				$(this).css('background-color', wireSelected.css('background-color'));
				checkWin($wirePlace, $wireSlot);
			}

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
   var closeButton = $("<button id=exitButton>X</button>")
   containerBox.append(text);
   containerBox.append(closeButton);
   $('.main-container').append(containerBox);
   closeButton.on('click', function (event) {
      console.log('jim');
      containerBox.remove();
   });
}







