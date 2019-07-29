window.onload = () => {
	console.log("Hello World.");

	document.getElementById("about-btn")
		.addEventListener("click", btn => {
			document.getElementById("about").classList.toggle("active");
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