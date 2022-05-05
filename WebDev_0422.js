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

