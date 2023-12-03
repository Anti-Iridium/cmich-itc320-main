"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$("#arrival_date").focus();
	$("#reservation_form").on("submit", function(event) {

		let arrivalDate = $("#arrival_date").val().trim();
		if(arrivalDate == ""){
			$("#arrival_date").next().text("This field is required");
			event.preventDefault();
		} 
		else {
			$("#arrival_date").next().text("*");
		}
		$("#arrival_date").val(arrivalDate);
		
		let nights = $("#nights").val().trim();
		if(nights == "" || isNaN(nights)){
			$("#nights").next().text("Must be numeric");
			event.preventDefault();
		} 
		
		else {
			$("#nights").next().text("*");
		}
		$("#nights").val(nights);
		
		let name = $("#name").val().trim();
		if(name == ""){
			$("#name").next().text("This field is required");
			event.preventDefault();
		} 
		else {
			$("#name").next().text("*");
		}
		$("#name").val(name);
		
		let email = $("#email").val().trim();
		if(email == "" || !email.match(emailPattern)){
			$("#email").next().text("Must be a valid email");
			event.preventDefault();
		} 
		else {
			$("#email").next().text("*");
		}
		$("#email").val(email);
		
		let phone = $("#phone").val().trim();
		if(phone == "") {
			$("#phone").next().text("This field is required");
			event.preventDefault();
		} 
		else {
			$("#phone").next().text("*");
		}
		$("#phone").val(phone);
	});
}); // end ready