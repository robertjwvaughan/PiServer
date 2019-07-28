window.onload = () => {
	document.getElementById("fade-icons").classList.toggle("fade");
	document.getElementById("fade-buttons").classList.toggle("fade");
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