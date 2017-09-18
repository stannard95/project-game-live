Game 1: SPARTA ESCAPE

What is it?:
	Escape Sparta Global! A point and click puzzle game. The player has stayed late at Sparta Global to finish their homework 	
	and they are locked in and the doors are locked. The player must escape!

	MVP:

		-Make a tutorial that is easy to understand, especially for those who haven’t played escape games before.	

		-Create multiple rooms with puzzles, and the rooms that link with each other.

		-The bottom floor is made.
		
		-The player has an inventory where they can store their items they collect through the game.
		
		-The player is timed by how long they take to escape.
		
	
	how it will work:
		
		-Multiple html files relative for each room.
			
		-Click on a door to a new room, goes to relevant html file.
			
		-Inventory is carried across to each html file.
			
		-Player clicks on objects, picks up, hover over for description.

		-Player can views descriptions of objects in the room and the items in the inventory.

		-Player can combine items to make a new one that will them in certain puzzles.
			
		-They have a button to view a map of the place.
		
		-They will need items and work out clues to get through the game.
		
		-A timer is tracked throughout the game until they leave the place.
		
		-Final time is stored in a leaderboard which they can see next time.
			
		-They can talk to npc’s in the game.
		
		-Take some photos of the rooms and replicate them in images.
		
		-Either make the art myself using paint, or take royalty free images from online.

		-Riddles and puzzles to solve situations.


	possible issues:	

		-Mapping out the building will need to be done correctly, and being able to keep track of which door goes to which room.
	
		-Making the images may take some time and arranging them in the html.

		-Lots of designs are required for this to be successful.

		-Linking over the inventory and displaying it I will need to work how to do.

		-Keeping a timer and saving it in a leaderboard for them to view when they play.


Game 2: SNAP!

What is it?:
	Two player game using the keyboard, players will take turns placing down their cards and who ever snaps a matching card 	
	quickest wins the round. Best out of three.

	MVP:
		-The game will be two player.
		
		-Make a stack of cards, players are given a shuffled pack and can place them in the middle.

		-Player’s use the keyboard to use make a snap when the card is matched.


	
	how it will work:
		-One html file, one js script file, one style file.
		
		-Each player has their own arrays, objects of cards.
			-Cards will have card type, card number, card image.

		-Each player has 3 lives.
		
		-There will be an empty array in the middle, players add to the stack each time.

		-Stack empties and each player reshuffles their cards after the a snap is made or when they both run out of cards.

		-Use images of the cards taken from online.
		
		-Each user can only see how many cards they have left, which is displayed by a count.

		-The middle stack shows the card that has been previously stacked.

		-Best out of three.

		-Once a card has been laid on the stack, players have an option to hit the snap key.
			-If they hit snap on an unmatched pair then they will lose a life.
				- Lose 3 lives, the other player wins.

			-If they hit a snap on an matched pair, then that player wins.

			-A tie if they snap at the same time.

	
	
	possible issues:
		-Creating an array of objects, keeping track of them.
		
		-Being able to shuffle an array.

		-Making sure the correct card appears and with the right image.
		