/*
	Author: Robert Vaughan
	Desc: JS for personal site

	Simples
*/

const BOARDLENGTH = 20;
const BOARDWIDTH = 10;

const WHITE = "#FFFFFF";
const BLACK = "#000000";

window.onload = () => {
	const keys = ['a', 'w', 'd', 's'];
	const space = 'spacebar';

	document.getElementById("about-btn")
		.addEventListener("click", _ => {
			document.getElementById("about").classList.toggle("active");
			document.getElementById("home").classList.toggle("inactive");
		});

	document.getElementById("home-btn")
		.addEventListener("click", e => {
			goHome(e);
		});

	// document.getElementById("tetris-home-btn")
	// 	.addEventListener("click", e => {
	// 		goHome(e);
	// 	});

	document.getElementById("tetris-btn")
		.addEventListener("click", _ => {
			document.getElementById("tetris").classList.toggle("active");
			document.getElementById("spacebar-key").focus();
			document.getElementById("home").classList.toggle("inactive");

			renderTetrisBoard();
		});

	window.addEventListener("keydown", function(e) {
		if (keys.includes(e.key.toLowerCase())) {
			changeKeyColor(e.key.toLowerCase(), WHITE, BLACK);
		}
		else if (e.key == " ") {
			changeKeyColor(space, WHITE, BLACK);
		}
	});

	window.addEventListener("keyup", function(e){
		if (keys.includes(e.key.toLowerCase())) {
			changeKeyColor(e.key.toLowerCase(), BLACK, WHITE);
		}
		else if (e.key == " ") {
			changeKeyColor(space, BLACK, WHITE);
		}
	});
}

function renderTetrisBoard() {
	// Vanilla js

	const rootDiv = document.getElementById("tetris-svg");

	for (let i = 0; i < BOARDLENGTH; i++) {
		for (let j = 0; j < BOARDWIDTH; j++) {
			const newCell = document.createElement("div");
			
			newCell.classList.add("tetris-cell");
			rootDiv.appendChild(newCell);
		}
	}
}

function changeKeyColor(key, color, textColor) {
	document.getElementById(key + "-key").style.background = color;
	document.getElementById(key + "-key").style.color = textColor;
}

function goHome(event) {
	document.getElementById("home").classList.remove("inactive");
	document.getElementById(event.target.parentNode.parentNode.id).classList.remove("active");
}

function newWindow(address) {
	// I do not like this constant but it keeps it neat
	const win = window.open(address, "_blank");
	win ? win.focus() : window.location = address;
}