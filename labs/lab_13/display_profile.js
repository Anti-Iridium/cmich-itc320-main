"use strict";

$(document).ready( () => {
	// display data from session storage
	$("#email").text(sessionStorage.getItem("email"));
	$("#phone").text(sessionStorage.getItem("phone"));
	$("#zip").text(sessionStorage.getItem("zip"));
	$("#dob").text(sessionStorage.getItem("dob"));
	$("back").click( () => {
		console.log("wtf"); //This is never happening, and i dont know why. 
		history.go(-1);		//The example on w3schools website works no problem
	}); // end of click()
	
}); // end of ready()