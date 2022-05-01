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


