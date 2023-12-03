"use strict";

$("#date").focus();



$(document).ready( () => {
	
	const formValidation = () =>{
		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		const datePattern =/^\d{2}\/\d{2}\/\d{4}$/;
        const phonePattern = /^\d{10}$/
		let stateCodes = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
		
		let date = $("#date").val();
		let firstName = $("#fname").val();
		let lastName = $("#lname").val();
		let email = $("#email").val();
        let reEmail = $("#re-email").val();
		let phone = $("#phone").val();
        let state= $("#state").val();
        let zip = $("#zip").val();
		
		let isValid = true;

		let dateParts = date.split("/");
		let month = dateParts[0];
		let day = dateParts[1];
		let year = dateParts[2];
		
		if(!datePattern.test(date) ){
			isValid = false;
			document.getElementById("dateError").textContent = "*Must be a valid date mm/dd/yyyy";
		} else if(month > 12 || month < 1){
			isValid =false;
			document.getElementById("dateError").textContent = "*Month must be 1-12";
		} else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
			if(day > 31 || day < 1){
				isValid = false;
				document.getElementById("dateError").textContent = "*Day must be 1-31";
			}
		}	else if(month == 4 || month == 6 || month == 9 || month == 11){
			if(day > 30 || day < 1){
				isValid = false;
				document.getElementById("dateError").textContent = "*Day must be 1-30";
			}
		} else if(month == 2){
			if(year % 4 == 0 && day > 29 || day < 1 ){
				isValid = false;
				document.getElementById("dateError").textContent = "*Day must be 1-29 for a leap year";
			} else if(day > 28 || day < 1){
				isValid = false;
				document.getElementById("dateError").textContent = "*Day must be 1-28 for a non-leap year";
			}
		} else{
			document.getElementById("dateError").textContent = "";
	
		}
		if(firstName === ""){
			isValid = false;
			document.getElementById("fnameError").textContent = "*Please enter a first name";
		}else{
			document.getElementById("fnameError").textContent = "";
			
		}
        if(lastName === ""){
			isValid = false;
			document.getElementById("lnameError").textContent = "*Please enter a last name";
		}else{
			document.getElementById("lnameError").textContent = "";
			
		}
		if(!emailPattern.test(email)){
			isValid =false;
			document.getElementById("emailError").textContent = "*Must be a valid email";
		} else{
			document.getElementById("emailError").textContent = "";
			
		}
        if (reEmail !== email|| reEmail === ""){
            isValid =false;
			document.getElementById("re-emailError").textContent = "*Emails must match";
			
		} else{
            document.getElementById("re-emailError").textContent = "";
        }
		
		 if(!phonePattern.test(phone)){
			document.getElementById("phoneError").textContent = "*Must be a valid phone number";
			isValid = false;
		} else{
            document.getElementById("phoneError").textContent = "";
        }
        if(zip.toString().length !==5 || zip === "" ){
            document.getElementById("zipError").textContent = "*Must be a valid zip code";
            isValid = false;
        } else {
            document.getElementById("zipError").textContent = "";
        }
        if(state.length !==2 || state === "" || !stateCodes.includes(state) ){
            document.getElementById("stateError").textContent = "*Must be a valid state code";
            isValid = false;
        } else {
            document.getElementById("stateError").textContent = "";
        }
		
		return isValid;
		}
	$("#submit").on("click",evt => {
	if(!formValidation()){
		evt.preventDefault();
	}
});

}); 