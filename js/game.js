// Author: Frederick Coleman - January 2018
let userPlay = document.getElementById("user-play");
let compPlay = document.getElementById("computer-play");
let roundResult = document.getElementById("game-result");
let userScore = document.getElementById("user-score");
let compScore = document.getElementById("computer-score");

let buttons = document.querySelectorAll('INPUT');

function computer_play() {
	let options = ['rock', 'paper', 'scissors'];
	let randomNum = Math.floor(Math.random() * 4);
	return options[randomNum];
};

function round(user_str) {
	user_str = user_str.toLowerCase();

	if ((user_str != 'rock') && (user_str != 'paper') && (user_str != 'scissors')) {
		return "Invalid input"
	};

	userPlay.innerHTML = "You chose "+user_str+".";
	var comp_str = computer_play();
	compPlay.innerHTML = "The computer chose "+comp_str+".";