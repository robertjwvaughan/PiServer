/*
	Author: Robert Vaughan
	Desc: JS for personal site
*/

window.onload = () => {
	document.getElementById("about-btn")
		.addEventListener("click", _ => {
			document.getElementById("about").classList.toggle("active");
			document.getElementById("home").classList.toggle("inactive");
		});

	document.getElementById("home-btn")
		.addEventListener("click", _ => {
			document.getElementById("home").classList.remove("inactive");
			document.getElementById("about").classList.remove("active");
		});

	document.addEventListener("animationend", e => {
		if (e.animationName === "fadeOut") {
			e.target.classList.replace("active", "inactive");
			console.log("Fade in" + e.target.id);
		}
		if (e.animationName === "fadeIn") {
			e.target.classList.replace("inactive", "active");
			console.log("Fade in" + e.target.id);
		}
	});
}

function newWindow (address) {
	// I do not like this constant but it keeps it neat
	const win = window.open(address, "_blank");
	win ? win.focus() : window.location = address;
}