"use strict";
const $ = selector => document.querySelector(selector);


const processEntry = () => {
	const income = parseInt($("#income").value);
	if (isNaN(income) || income <= 0) {
        alert('income must be > 0');
    }
	else {
		calculateTax(income);
	}
}
const calculateTax = (income) => {
    let tax = 0;
	if (income > 0 && income <= 9875){
		tax = income * .1;
	}
	else if (income > 9875 && income <= 40125){
		tax = 987.5 + ((income - 9875) * .12);
	}
	else if (income > 40125 && income <= 85525){
		tax = 4617.5 + ((income - 40125) * .22);
	}
	else if (income > 85525 && income <= 163300){
		tax = 14605.5 + ((income - 85525) * .24);
	}
	else if (income > 163300 && income <= 207350){
		tax = 33271.5 + ((income - 163300) * .32);
	}
	else if (income > 207350 && income <= 518400){
		tax = 47367.5 + ((income - 207350) * .35);
	}
	else if (income > 518400){
		tax = 156235 + ((income - 518400) * .37);
	}
    $("#tax").value = tax.toFixed(2);
};


document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});