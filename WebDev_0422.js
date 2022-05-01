/* */

        //console.log("Hello World");


        /*/////////////////////////////////////////////////*/
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
