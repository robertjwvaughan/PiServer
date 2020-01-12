/*
	Author: Robert Vaughan
	Desc: JS for personal site

	Simples
*/

window.onload = () => {
	const keys = ['a', 'w', 'd', 's'];

	document.getElementById("about-btn")
		.addEventListener("click", _ => {
			document.getElementById("about").classList.toggle("active");
			document.getElementById("home").classList.toggle("inactive");
		});

	document.getElementById("home-btn")
		.addEventListener("click", e => {
			goHome(e);
		});

	document.getElementById("tetris-home-btn")
		.addEventListener("click", e => {
			goHome(e);
		});

	document.getElementById("tetris-btn")
		.addEventListener("click", _ => {
			document.getElementById("tetris").classList.toggle("active");
			document.getElementById("home").classList.toggle("inactive");
		});

	window.addEventListener("keydown", function(e) {
		if (keys.includes(e.key.toLowerCase())) {
			changeKeyColor(e.key.toLowerCase(), "#FFFFFF");
		}
	});

	window.addEventListener("keyup", function(e){
		if (keys.includes(e.key.toLowerCase())) {
			changeKeyColor(e.key.toLowerCase(), "#000000");
		}
	});
}

function changeKeyColor(key, color) {
	document.getElementById(key + "-key").style.background = color;
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