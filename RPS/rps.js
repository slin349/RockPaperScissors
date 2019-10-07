
let result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scis_div = document.getElementById("s");

function random() {
	const choices = ['r', 'p', 's'];
	const random = Math.floor(Math.random ()*3);
	return choices[random];
}


function game(userChoice) {
	const computerchoice = random();
	switch (userChoice + computerchoice) {
		case "rs":
		case "sp":
		case "pr":
			win(userChoice, computerchoice);
			break;
		case "ps":
		case "rp":
		case "sr":
			lose(userChoice, computerchoice);
			break;
		case "ss":
		case "rr":
		case "pp":
			tie(userChoice, computerchoice);
			break;
	}
}

function convertToWord (letter){
	if (letter == "r") return "Rock";
	if (letter == "p") return "Paper";
	return ("Scissors");
}
function win(user, computer) {
	result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You Win!`
	document.getElementById(user).classList.add('greencircle');
	setTimeout(function () { document.getElementById(user).classList.remove('greencircle') }, 750);
}

function lose(user, computer){
	result_div.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}. You Lose!`
	document.getElementById(user).classList.add('redcircle');
	setTimeout(function () { document.getElementById(user).classList.remove('redcircle') }, 750);
}

function tie(user, computer){
	result_div.innerHTML = `Draw!`
	document.getElementById(user).classList.add('greycircle');
	setTimeout(function () { document.getElementById(user).classList.remove('greycircle') }, 750);
}

function main() {
	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function() {
		game("p")
	})

	scis_div.addEventListener('click', function() {
		game("s")
	})
}

main();
