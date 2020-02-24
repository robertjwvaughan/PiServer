/*
	Author: Robert Vaughan
	Desc: JS for personal site

	Simples
*/

const ns = "http://www.w3.org/2000/svg";

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
			changeKeyColor(e.key.toLowerCase(), "#FFFFFF", "#000000");
		}
		else if (e.key == " ") {
			changeKeyColor(space, "#FFFFFF", "#000000");
		}
	});

	window.addEventListener("keyup", function(e){
		if (keys.includes(e.key.toLowerCase())) {
			changeKeyColor(e.key.toLowerCase(), "#000000", "#FFFFFF");
		}
		else if (e.key == " ") {
			changeKeyColor(space, "#000000", "#FFFFFF");
		}
	});
}

function renderTetrisBoard() {
	// Vanilla js

	const boardLength = 20;
	const boardWidth = 10;

	const rootDiv = document.getElementById("tetris-svg");

	for (let i = 0; i < boardLength; i++) {
		for (let j = 0; j < boardWidth; j++) {
			const newCell = document.createElement("div");
			
			newCell.classList.add("tetris-cell");
			rootDiv.appendChild(newCell);
		}
	}

	// var div = document.getElementById('tetris-svg') 
	// var svg = document.createElementNS(ns, 'svg')
	// svg.setAttributeNS(null, 'width', squareLength)
	// svg.setAttributeNS(null, 'height', squareLength)
	// div.appendChild(svg)
	// var rect = document.createElementNS(ns, 'rect')
	// rect.setAttributeNS(null, 'width', 100)
	// rect.setAttributeNS(null, 'height', 100)
	// rect.setAttributeNS(null, 'fill', '#f06')
	// svg.appendChild(rect)
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