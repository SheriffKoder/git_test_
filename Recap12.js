
	/*/////////////////////////////////////////////////////////*/
	/*this file contains lines of code used in code warmup sessions 
	practiced every day to keep the mind familliar with different concepts*/
	/*/////////////////////////////////////////////////////////*/




	/*/////////////////////////////////////////////////////////*/	
	/*function give a random card1, function tell relation of random 
	card1 in to another given random card2 */

	function Random () {

		let x = Math.floor(		Math.random() *	3);
		return ['rock', 'paper', 'sci'][x];
	}

	let player_selection = Random();
	let bot_selection = Random();
	//console.log(player_selection);
	//console.log(bot_selection);

	decide (player_selection, bot_selection);





	function decide (selection_1, selection_2) {


		let object_choices = {

			'rock': 	{'sci': 1, 'rock': 0.5, 'paper': 0},
			'paper': 	{'sci': 0, 'rock': 1, 'paper': 0.5}, 	
			'sci': 		{'sci': 0.5, 'rock': 0, 'paper': 1}, 		

		};

		let yourscore = object_choices[selection_1][selection_2];
		let botscore = object_choices[selection_2][selection_1];

		console.log(yourscore);


	}


	/*/////////////////////////////////////////////////////////*/
	/* store image source into a variable inside an object before 
	original copy removal*/


	function Read_image_source_by_id () {

		let objects_source_backup = {
			'rock' : document.getElementById('rock').src,
		}


		console.log(objects_source_backup['rock']);

	}

	Read_image_source_by_id ();
