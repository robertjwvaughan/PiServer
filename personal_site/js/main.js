$(function() {
	$( document ).ready(function() {
		var surprise =	[
			"Yay Emails!", 
			"Because who uses fax?",
			"Stallman, is that you?",
			"Let's be pals.",
			"You like Nine Inch Nails?",
			"You like the black?",
			"Let's talk business",
			"I can write code"
		];

		$("#title-email").html(surprise[Math.floor((Math.random() * surprise.length))]);
		// $("#title-email").html(surprise[1]);

		$('#name').fadeIn(1000, function() {
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

		$('#email').click(function(e) {
			e.preventDefault();
			$('.text-email').width($('.intro').width() * 2);
			$('.your-email').width($('.text-email').width() + 4);
			$('.text-email').height($('.intro').height() - $('.main-tab').height() * 4);
			$('.intro').fadeOut( function() {
				$('.query').fadeIn();
			});
		});

		$('#back').click(function(e) {
			e.preventDefault();
			$('.query').fadeOut( function() {
				$('.intro').fadeIn();
			});
		});
	});	
});

function fadeButtons () {
	$('.email-button').width($('.intro').width() / 2);
	$('.main-tab').width($('.intro').width() / 2);

	$('#git').css('visibility','visible').hide().fadeIn(750, function() {
		$('#linked').css('visibility','visible').hide().fadeIn(750, function() {
			$('#email').css('visibility','visible').hide().fadeIn(750);
		});
	});
}