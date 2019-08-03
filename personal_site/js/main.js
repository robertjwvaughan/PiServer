window.onload = () => {
	document.getElementById("about-btn")
		.addEventListener("click", _ => {
			document.getElementById("about").classList.toggle("active");
			document.getElementById("home").classList.toggle("inactive");
		});

	document.addEventListener("animationend", e => {
		if (e.animationName === "fadeOut") {
			e.target.style.display = "none";
			console.log("Hello World");
		}
	});
}

function newWindow (address) {
	var win = window.open(address, "_blank");
	if (win) {
	    win.focus();
	}
	else {
	    window.location = address;
	}
}