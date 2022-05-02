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


