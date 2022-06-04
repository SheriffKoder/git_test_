/* */

        //console.log("Hello World");

        /*/////////////////////////////////////////////////*/
        /*////////////////////01/05/////////////////////////*/
        /* take greenplanet html-paragraph, change its HTML, 
        ,set a new css-class, output a new html describing 
        the css-class  */

        let planet = document.getElementById("greenplanet");

        planet.setAttribute ("class", "redtext");

        let att = planet.getAttribute("class");
        planet.innerHTML = "Hello this text now is in " + att + " class";



        /*/////////////////////////////////////////////////*/
        /* typeof x */
	var _type = typeof null;
	console.log(_type); //object

        /* == operator 'converts' "99" to number and finds 
        it is a number of 99 so the statement is true */
	if ("99" == 99) {
		//console.log("A number equals a string!");
        }
        
        /* some other true statements to reflect on */

        //if (1 == true)
        //if (0 < true)
        //if (undefined == null)
        //if (0 !== false)
        //if ("Banana" < "banana")
                //console.log("Test is correct");


        /* === operator searches for equality in type and value */


        /*/////////////////////////////////////////////////*/
        /*////////////////////02/05/////////////////////////*/

        /* mathematical operators */
        let divide0205 = 12 / "3"; // output is 4, /,-,* converts string to number
        let addition0205 = 3 + 4 + "string"; //output is 34string, + sign when finds string converts number to string,use Number(x) to avoid number conversion
        let subtract0205 = 1-true; //true statement, output is 0 1-1

        //tricky
        let inf0205 = Infinity - "1"; //infinite number is large, wont be less large by reducing by 1 only
        let subtract02051 = "1" - "1"; //output 0
        let subtract02052 = "one" - "one"; //output NaN

        //console.log(subtract02052);



        /*/////////////////////////////////////////////////*/
        /* objects and equality operators */
        /* an object is equal only to an object or variable 
        if only holding its reference not value */

	var chevyobject = { 
		make: "Chevy",
		model: "Bel Air",
	};

	var fordobject = { 
		make: "Chevy",
		model: "Bel Air",
	};

	var x = chevyobject;
	let y = "Bel Air";
	let z = fordobject.model;

	if (chevyobject === fordobject) { //not equal, different references
		console.log("object 1 = object 2");
	}

	if (chevyobject === x) { // equal, x points to same reference
		console.log("object 1 = object 2");
	}

	if ( y === x.model) {
		console.log("value = object value");
	}


        /*/////////////////////////////////////////////////*/
        /* false conditions (falsey), none of them are true */

        if (0)
                console.log("true");
        if (NaN)
                console.log("true");
        if("")//empty string, not even an empty space
                console.log("true");
        if(document.getElementById("unexsitingElement0205"))
                console.log("true");
        
        let UndeFined_Variable0205;
        if(UndeFined_Variable0205)
                console.log("true");
        if (null)
                console.log("true");


        /* but guess what!, these are true */
        if (1)
                console.log("true");

        if([])
                console.log("true");

        if({})
                console.log("true");


        /*/////////////////////////////////////////////////*/
        /* string can be primitive and an object to use functions with  */

        let text = "HELLO";
        text.toLowerCase();
        if (text.charAt(1) === "E")
                console.log("found an E in the 2nd letter"); 




        /*////////////////////04/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/
        ////JS Built in STRING functions that can be used for checks
	////js interpreter temp converts strings into an object

	let name = "john smith";
	let phone = "0123456789";

	//return the starting position of ""
	//var index2 = name.indexOf("h"); //found starting position #2
	//var index2 = name.lastIndexOf("h"); // last occurance at position #9
	//var index2 = name.indexOf("h", 5); //start finding from position #5, the next "h" in positon 9
	//var index2 = name.lastIndexOf("h", 5); // last occurance right to left starting postion 5, will be the #2
	//var index2 = phone.substring(6); //outputs a string of items in position 6 onwards
	//var index2 = phone.substring(6,8); // string ~from 6 to the position before 8 (7)
	//var index2 = phone.split("45"); // replace 45 with a string splitter
	//var index2 = name.trim(); //removes white space AROUND string
	//var index2 = name.match("op"); //searches for "mi" and returns it, else null, object
	//var index2 = name.replace("smith", "junior"); //replaces string1 with string2
	//var index2 = name.concat(phone,phone); //attached two or more strings together
	var index2 = name.toUpperCase(); //upper case convert
	
	console.log(name);
	console.log(index2);
	console.log(typeof index2);



        /*/////////////////////////////////////////////////*/
        /*Question: make a function that checks for the string 123-4567 
	and accepts only it if it does the following
	1)same length 
	2)sting contains only digits from 0-9 
	3)but a dash in position #3 and it should be there
	3.A) able to quickly adjust to not contain all numbers no dash
	*/


	//take the phone number
	let phonenumber = "123-4567";

	let output = check2 (phonenumber);
	console.log("the entered number format is",output);

	function check2 (A) {

		//console.log(typeof A[3]);

		//Answer to point 3.A : replace OR condition #2 by checkNaN (3,4,A)
		if (	(A.length !== 8) || (A[3]!=="-" ) || checkNaN (0,3,A) == false || checkNaN (5,A.length-1,A) == false  ) {

		        return false;
		}


		return true;

	}

	//let A = phonenumber;
	//console.log ( checkNaN (5,A.length-1,A) );
	function checkNaN (	start, end, A2	) {

		for (i=start; i<end; i++ ) {


			//cant === nan , a[i] is string
			//console.log(A[i]);		//opps! a string
			let x = A2[i] - 0;			//needed to convert the A[i] to a number, this did the trick
			//console.log(x);			//not affected
			//console.log(typeof x); 	//and still a number

			if (isNaN(x)) {
					//console.log("not a number");
					return false;
			}
		}
		return true;
	}


        console.log("/////0505/////");
        /*////////////////////05/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        /* instanceof checks test if from object-function 
        and returns true or false
        */


        function Func ( output ) {
                this.output = output;
                this.DoSomething = function () {
                        console.log (this.output);
                }


        }

        var test = new Func ("sometext");
        test.DoSomething();
        console.log(typeof test);
        console.log(test instanceof Func);


        /*////////////////////06/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        /* object of functions */

        var view = {

                displaymessage : function (text) {
                                        let textspace = document.getElementById("greenplanet2");
                                        textspace.innerHTML = text;
                                        textspace.setAttribute("class", "redtext");
                                },
        };

        var want_to_show = "TEXT through object of functions";
        view.displaymessage(want_to_show);




        /*////////////////////07/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        var model = {

                numShips: 2,

                //ships1: [1,2,3],
                //can also make an array of objects inside it instead of numbers
                //{location["10", "20", "30"], hits: [" ", " ", " "]}
                ships1: [
                        {locations:["10", "20", "30"], hits: [" ", " ", " "]},
                        2,//replace
                        3,//replace
        ],

                get_output: function () {
        
        
                        console.log(this.ships1[0].locations[0]);
                        //ship1, item
                        //this.ships1 or model.ships1

                }
 
        }

        model.get_output();


        /*////////////////////08/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/
        console.log("/////08/05/////");

        /*function takes a string and divides it
        to take the first part and return another value from it
        from a reference */

        function divideinput ( input ) {

                let Reference_Chars = ["A", "B"]; 
                let input_part1 = input.charAt(0);
                let input_part2 = input.charAt(1);

                console.log(input_part1);

                let new_input = Reference_Chars.indexOf(input_part1);
                //will be A in this case, find its place in Reference_Chars
                //and use this reference as the new input
                console.log( typeof new_input);
                console.log(new_input);

                return new_input + input_part2;
        }


        let variable0805 = divideinput("A3");
        console.log (variable0805); //03

        /*/////////////////////////////////////////////////*/
        /* series of functions take text from HTML_input
        and display it in console either by Clicking a Button
        or entering the text then pressin enter (ASCII key13)*/

        function Handle_input () {
                var inputText = document.getElementById("Input_id");
                var inputValue = inputText.value;

                //take value from id
                console.log(inputValue);
        }

        //function need to be called after put value
        //get button id and onclick = call function
        //or
        //get input id and onkeypress (click the button)
        //e needs a reference passed from onkeypress so will copy that to another function


        function init () {
                var InputButton = document.getElementById("Button_id");
                InputButton.onclick = Handle_input;


                var inputText = document.getElementById("Input_id");
                inputText.onkeypress = keypressfunction;
        }

        function keypressfunction (e) {
                var InputButton = document.getElementById("Button_id");
                

                if (e.keyCode === 13) {
                        InputButton.click();
                }

        }

        init();

        /*/////////////////////////////////////////////////*/

        /* conditioned do while loops */
        function ConditionedLoop () {

          let x=2;

          do {
             x = prompt ("enter a value");
          } while (x > 0);
                

        }

        //ConditionedLoop ();

        /*/////////////////////////////////////////////////*/

        function generatePostition () {
        
        let XorY = Math.floor(Math.random()*2); //0 to 1
        let row, col;
        let boardSize = 3;
        let elementLength = 2;
        let boardbordergap = elementLength - 1;
        if (XorY === 1) { //then Y is selected
        row = Math.floor (Math.random () * boardSize);
        col = Math.floor (Math.random () * boardSize - boardbordergap);
        

        // boardsize 3 and elementlength 2, then bordergap is 1,
        // and we want from 0 to 1 i.e 2 for col, so boardsize-bordergap = 2        
        //and we want 0,1,2 *3,, 0,1 *2 3-1 , 2-1=1, 3-1=2
        // boardsize 6 and elementlength 3, then bordergap is 2,
        // and we want from 0 to 3 i.e 4 for col, so boardsize-bordergap = 4
        // 0,1,2,3,4,5 *6, 0,1,2,3 *4 (3-1)=2, 6-2=4

        }
        
        else {
                //the opposite in row/col
        }

        //if element length is 2, want the col to have value+0,value+1, 0->1 i.e 
        if (XorY == 1) {
                for (i=0; i < elementLength; i++) {
                        newLocations.push (row + (col+i));
                }
        }
        else {
                //the opposite in row/col
        }
}
        
        /*/////////////////////////////////////////////////*/

        /*have positions = [ 00, 01, 02 ] 
        want to check in the 3 ships array, but let us try one ship locations
        in the ship object locations find if any of the positions are found*/

        let ship = {
                locations: ["11", "10", "01"] , 
                hit: ["", "", ""],
        };

        console.log(ship.locations);
        console.log (typeof ship.locations[1]);

        let positions = ["00", "01", "01"];

        console.log(positions[1]);
        console.log (typeof positions[1]);

        for (i=0 ; i < positions.length; i++ ) {
          let check = ship.locations.indexOf(positions[i]);
          if ( check >= 0 ) {
                console.log("found at " + check);

          }
        }


        /*////////////////////13/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        //var images = document.getElementsByTagName("img"); //object type (nodelist) 	//nodelist, technical name for the element objects in the dom
	//can iterate over it by its length, and access each in the list

        //var image = eventObj.target; //target tells us what element generated the event
        //hold object event occured, element object



        /*////////////////////15/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/


        /*function lets you capture all image elements in a NodeList
        then can access onclick the image with a function
        that displays the id of target */

        function init2 () {

                let images = document.getElementsByTagName('img');

                images[1].id = "one"
                console.log(images[1].id);

                for (var i=0; i<images.length; i++) {
                        images[i].onclick = showAnswer;
                }
        }


        init2();

        function showAnswer (x) {

                var input = x.target;
                console.log(input.id);
                //here we can change id, src etc.
        }


        /*////////////////////17/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        /* every 3000ms call function, if input is "1", stop counting */

        function timeHandler () {
                let x = prompt ("enter value");
                if (x=="1") {
                        clearInterval (timeHandlerVariable);
                }
        }

        //let timeHandlerVariable = setInterval(timeHandler, 3000);


        /*////////////////////17/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/


        /* setTimeout can pass a parameter to function */
        setTimeout(functionWake, 2000, "Parameter Passed");

        function functionWake (input) {

                console.log(input);
        }


        /*////////////////////21/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        /*function lets element modified when mouse 
        hover on the element or hover out from it*/

        function MouseHover () {

        let inputTest = document.getElementById('header');
        inputTest.onmouseover = MouseChangeText;
        inputTest.onmouseout = MouseChangeText2;

        }

        function MouseChangeText (x) {

                var input = x.target; 
                input.innerHTML = "input changed";
        }

        function MouseChangeText2 (x) {

                var input = x.target; 
                input.innerHTML = "input reversed";
        }

        MouseHover();

        /*////////////////////23/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        window.onresize = resizeFunction;

        function resizeFunction () {
                console.log("page has been resized");
        }


        /*////////////////////24/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        /*functions let display mouse position */
        mouseMoveCoordinates();

        function mouseMoveCoordinates () {

                let x = document.getElementById("header");
                x.onmousemove = showCoordinates;
        }

        
        function showCoordinates(eventObj) {

                let x = eventObj.clientX; //.clientX for browser window other windows available
                let y = eventObj.clientY;
                console.log(x,y);

        }


        /*////////////////////25/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        /*we have two types until now for function use
        1) the normal way, Declaration 
        2) function expression, call a function by its variable reference */
        /*we can also pass an unamed function in the parameter and call it*/

        var flyfly = function (passedFunction) {

                //console.log("Hey There");
                passedFunction();
                }

        flyfly( function () { console.log("Hey There")          } );


        /*////////////////////26/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        /*we can have a variable with the reference value and use it as a function name*/
        var flyfly2 = flyfly;
        flyfly2( function () { console.log("Hey There")          } );


        /*////////////////////31/05/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        /*function variable to use another function as an input, we can use any function name */
        /*using true and false to determine statements*/


        let answer = "no";

        function processPassengers (passengers, testFunction){

                if ( testFunction(passengers)) {
                        return false;
                }
                return true;
        }

        function testFunctionX (input) {
                return (input === "no");
        }

        //if no, true, then false returned
        //if yes, false, then true returned

        var processTest = processPassengers (answer, testFunctionX);
        
        if (!processTest) {
                console.log("entered : no");
        }


        /*////////////////////01/06/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        /*return variable pointing to a function based on input*/

        function createDrinkOrder (passenger) {

                var orderFunction;

                if (passenger.ticket == "firstclass") {
                        orderFunction = function () {
                                        console.log("FirstClass Ticket");
                                        }
                }

                return orderFunction;
        }


        let objectPassenger = {name: "John", ticket: "firstclass"};
        let functionOption = createDrinkOrder(objectPassenger);

        functionOption();

        /*////////////////////02/06/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        function revSort (num1, num2) {
                return (num2-num1);     //if num2-num1 >0 then num2 is greater
        }

        //sort an array and use the optional function to reverse the sort
	var numbersArray = [60,50, 62, 58, 54, 54];
        var lettersArray = ["a", "c", "z", "w", "d"];
        console.log(numbersArray);

        numbersArray.sort(revSort);
        console.log(numbersArray);

        /*////////////////////03/06/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        //sort letters using sort_method
        lettersArray.sort(letterAscComparison);
        console.log(lettersArray);


        //declared function, location doesnt matter
        //extended with boolean comparison function to be used in sort method
        function letterAscComparison (letter1, letter2) {
        
                //return 1+
                if (letter1 > letter2) {
                        return 1;
                }

                //return 0
                else if (letter1 === letter2) {
                        return 0;
                }
                //return -1+
                else {
                        return -1;

                }
        }

        /*/////////////////////////////////////////////////*/

        /* ability to nest function in another function and pass values separately */
        /*have to return the function*/
        /*add an anonymous function in the timeout */
        function addN (n) {

                var Adder = function (x) {
                        let time = x * 500;

                        setTimeout ( function () {
                                                alert ("calculating" + x + " + " + n + " in " + time +" ms");
                                                }       
                                                , time);
                        return n+x;
                };

                return Adder;

        }

        var Adder2 = addN(2); //addN with N=2 waiting to be called
        //console.log( Adder2(4) );      //Adder sub function has 2, so it returns 2+2;

        
        /*////////////////////04/06/////////////////////////*/
        /*/////////////////////////////////////////////////*/

        //lexical scope, where function's local variables shadow the global variables 
        //nesting functions in functions and un-layering them

        let text2 = "Text2";

        function FUN406 () {

                let text3 = "Text3";

                function innerFunction () {
                        return text3;
                }

                return innerFunction;
        }


        var returnedInner = FUN406();   //where FUN returns a reference
        var innerFunctionX = returnedInner(); // call this reference, returns text3
                                        //if not call it is a reference,

        console.log(returnedInner);
        console.log(innerFunctionX);