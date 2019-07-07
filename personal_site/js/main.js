window.onload = () => {
	console.log("Hello World");
	console.log("Test World");
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