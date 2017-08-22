$(function() {
	$( document ).ready(function() {
		$('.name').fadeIn(3000, function() {
			loadName();
			fadeButtons();
		});

		$('#git').click(function(e) {
			e.preventDefault();
			window.location = "https://github.com/robertjwvaughan";
		});

		$('#linked').click(function(e) {
			e.preventDefault();
			window.location = "https://www.linkedin.com/in/robertjwvaughan/";
		});
	});	
});

function loadName () {
	console.log("Hello World");
}

function fadeButtons () {
	$('.main-tab').width($('.intro').width() / 2);
	$('#git').css('visibility','visible').hide().fadeIn(1500, function() {
		$('#linked').css('visibility','visible').hide().fadeIn(1500);
	});
}