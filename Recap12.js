
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


	/*/////////////////////////////////////////////////////////*/
	/* function can determine a certain message and a specific 
	color(string output) based on the input (score) and returns
	these values to be reused outside the function */
	function output_select (score) {

		let score_output_object = {
			'0.5' : { message: 'you tied', color: 'blue'},
			'0' : { message: 'you lost', color: 'red'},
			'1' : { message: 'you won', color: 'green'},
		};


	//return score_output_object[score];
	return score_output_object[score];

	}

	let player_score = 0.5;
	let x = output_select(player_score);
	console.log (x['message']);
	console.log (x['color']);



	/*/////////////////////////////////////////////////////////*/
	/* append image to the div in html using creatElement, 
	set src to either object value or a local destination, 
	also set a class for image size and finally append the 
	created element to the div by div's id */

	let image = document.createElement('img');

	let imageName = "google";

	/*can use a (changing)variable to give the name for the file
	by using ``instead of "" and placing ${variablename}.type*/
	image.src = `./${imageName}.png`;
	image.setAttribute('class', 'smallimage');
	document.getElementById('Div_ID').appendChild(image);



	
	/*/////////////////////////////////////////////////////////*/
	/*/////////////////////////////////////////////////////////*/
	/*	h1 inline style color, passed color, h1 message	*/
	/* make a new div and add to it an h1 with 
	the score message and style it with the score color
	then add it to the html div */


		let newDiv = document.createElement('div');
		//let testdiv = document.getElementById('Div_ID');
		newDiv.innerHTML = 	"<h1 style='color:" + x['color']+ "; font-size:20px; '>" +
		x['message']
		+ "</h1>";

		document.getElementById('Div_ID').appendChild(newDiv);


	/* 1) add an image to the html div using html
	 2) and set its height 3) the image source is from an object*/
	/* 4) using js, add style to the div being created before appending */

		let image_reference = {
			image1 : "./google.png",
			color: 'yellow',
			message: "hello world",
		};


		let newDiv2 = document.createElement('div');

		newDiv2.style.boxShadow = "0px 10px 50px rgba(243, 38, 24, 1)";

		newDiv2.innerHTML = "<img src = '" + image_reference['image1'] + "'; height=50;>";
		document.getElementById('Div_ID').appendChild(newDiv2);

		console.log(image_reference['image1']);


	/*	concern to figure out: yes you can add style-color using 
	an object item (can be used in interactive applications)*/
	
		let textAnswer2 = document.createTextNode(image_reference['message']);

		let TextResult = document.createElement('div');
		TextResult.style.color = image_reference["color"];

		TextResult.appendChild(textAnswer2);
		document.getElementById('Div_ID').appendChild(TextResult);

	
	/*/////////////////////////////////////////////////////////*/
	/*	function called on change selection,
	by passing this(selection), we can get option"value" selected by 
	this.value	*/


	function selection_function (input_selection) {

		let input_value = input_selection.value;
		console.log(input_value);


	}



	/*/////////////////////////////////////////////////////////*/
	/* get element by its tagname i.e type, access a specific element's 
	pecific "class" using classList array
	store this class in an array
	remove a class from a button
	add a class to a button using class list*/

	//
	let buttons = document.getElementsByTagName('button');
	console.log(buttons);
	let z = buttons[1].classList[1];
	console.log(buttons[1].classList[1]+" : before");
	console.log(z);

	//
	let current_classes = [];
	current_classes.push(z);
	console.log(current_classes);

	//
	buttons[1].classList.remove(z);
	console.log(buttons[1].classList[1]+ " : after");

	//
	let Red_button = "reddish";
	buttons[1].classList.add(Red_button);


	/*

	/*////////////////////10/05/////////////////////////*/
    /*/////////////////////////////////////////////////*/

	/*incrementing a value in object */
        let obj_test = {

			currentvalue: 0,

	};

	obj_test.currentvalue++;
	console.log (obj_test.currentvalue);

	/*/////////////////////////////////////////////////*/

	/* query selector is another way of receiving 
	elements by their id or variables 
	
	buttons we can use html on click
	we can use get element by id 
	and element.onclick = function
	and element.addeventlistener('click', function)

	we can play a sound file using play(); 
	but have to put the file's src file using new Audio var
	*/

	let YY = "#buttonTest";
	let buttonX = document.querySelector(YY);
	//let buttonX = document.querySelector("#buttonTest");

	buttonX.addEventListener('click', playsound);


	function playsound () {
		const WinSound = new Audio ('sounds/file.mp3');
		WinSound.play();
	}

	/*////////////////////12/05/////////////////////////*/
    /*/////////////////////////////////////////////////*/

		/*function allows by clicking an element to change 
	the element's source, then after 1000ms return the src back automatically
	
	/*take clicked input value and use it to get the id of
	that value in order to change the src of this id referece

	*/
	function display (input) {					//getX

		console.log ("///////1");
		console.log(input);
		let newinput = document.getElementById(input);	//get of Xid
		newinput.src = `./zero${input}.jpg`		//Xid set sourceX
		globalinput = input;					//global input
		setTimeout(reversedisplay, 1000); 		//Timeout and call function



	}

	function reversedisplay () {
		console.log ("///////2");
		console.log("timeout");
		console.log(globalinput);
		let newinput = document.getElementById(globalinput);
		newinput.src = `./zeroblur${globalinput}.jpg`
	}
