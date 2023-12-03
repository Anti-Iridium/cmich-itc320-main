"use strict";
const $ = selector => document.querySelector(selector);
const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];


const addScore = () => {
	let name = $('#name').value;
	let score = parseInt($('#score').value);
	console.log(score);
	if(name === '' || score === '' || isNaN(score) || score > 100 || score < 0) {
		$("#name").nextElementSibling.textContent = "Please enter the name.";
		$("#score").nextElementSibling.textContent = "Score must be between 0 and 100.";
	}
	else {
		names.push(name);
		scores.push(score);
		$('#name').value = '';
		$('#score').value = '';
	}
	$('#name').focus();
}

const displayResults = () => {
	let avg = 0.0;
	console.log(avg);
	let top = 0;
	let name1 = "";
	for (let i = 0; i < scores.length; i++) {
		avg += scores[i];
		console.log(avg);
		if (top < scores[i]) {
			top = scores[i];
			name1 = names[i];
		}
	}
	avg = avg / scores.length;
	console.log(avg);
	const results = document.querySelector("#results");
	
	let rh2 = document.createElement('h2');
	let rp1 = document.createElement("p");
	let rp2 = document.createElement("p");

	rh2.textContent = "Results";
	rp1.textContent = "Average score = " + avg;
	rp2.textContent = "High score = " + name1 + " with a score of " + top;
	
	results.appendChild(rh2);
	results.appendChild(rp1);
	results.appendChild(rp2);

}

const displayScores = () => {
	const scored = document.querySelector("#scores");
	let sh2 = document.createElement('h2');
	sh2.textContent = "Scores"
	scored.appendChild(sh2);
	for (let i = 0; i < scores.length; i++) {
		let label = document.createElement('label');
		label.textContent = names[i] + '	' + scores[i];
		scored.appendChild(label);
		scored.appendChild(document.createElement('br'));

	}

}


document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$('#name').focus();
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});