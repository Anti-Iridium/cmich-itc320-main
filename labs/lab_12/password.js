"use strict";

const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};

$(document).ready( () => {
    $("#generate").click( () => {
        $("#password").val( "" ); // clear previous entry
    
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        let numOfCharacters = $("#num").val().trim();
        if(isNaN(numOfCharacters)){
            alert("Please enter a number");
        }
        if(numOfCharacters < 1){
            alert("Please enter a positve number")
        }

        else {
            let password = "";

            for(let i = 0; i < numOfCharacters; i++) {
                password = password += chars.charAt(getRandomNumber(chars.length));
            }

            $("#password").val(password);
        }
    }); // end click()
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()