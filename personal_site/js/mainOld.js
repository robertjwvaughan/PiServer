$(function() {
	$( document ).ready(function() {
		var surprise =	[
			"Yay Emails!", 
			"Because who uses fax?",
			"Stallman, is that you?",
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
			newWindow("https://github.com/robertjwvaughan");
		});

		$('#linked').click(function(e) {
			e.preventDefault();
			newWindow("https://www.linkedin.com/in/robertjwvaughan/");
		});

		$('#twitter').click(function(e) {
			e.preventDefault();
			newWindow("https://twitter.com/robertjwvaughan");
		});

		$('#instagram').click(function(e) {
			e.preventDefault();
			newWindow("https://www.instagram.com/robertjwvaughan/");
		});

		$('#cv').click(function(e) {
			e.preventDefault();
			newWindow("/cv.pdf");
		});

		$('#soc').click(function(e) {
			e.preventDefault();
			newWindow("https://www.facebook.com/DITCompSoc/");
		});

		$('#about').click(function(e) {
			e.preventDefault();
			$('.intro').fadeOut( function() {
				$('.me').fadeIn();
			});
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

		$('#back-query').click(function(e) {
			e.preventDefault();
			$('.query').fadeOut( function() {
				$('.intro').fadeIn();
			});
		});

		$('#back-me').click(function(e) {
			e.preventDefault();
			console.log("Hello World");
			$('.me').fadeOut( function() {
				$('.intro').fadeIn();
			});
		});
	});	
});

function fadeButtons () {
	var timer = 200;

	$('.email-button').width($('.intro').width() / 2);
	$('.main-tab').width($('.intro').width() / 2.5);

	$('#email').css('visibility','visible').hide().fadeIn(timer, function() {
		$('#about').css('visibility','visible').hide().fadeIn(timer, function() {
			$('#git').css('visibility','visible').hide().fadeIn(timer, function() {
				$('#linked').css('visibility','visible').hide().fadeIn(timer, function() {
					$('#cv').css('visibility','visible').hide().fadeIn(timer, function() {
						$('#soc').css('visibility','visible').hide().fadeIn(timer, function() {
							$('#instagram').css('visibility','visible').hide().fadeIn(timer, function() {
								$('#twitter').css('visibility','visible').hide().fadeIn(timer);
							});
						});
					});
				});
			});
		});
	});
}

function newWindow () {
	var win = window.open(arguments[0], "_blank");
	if (win) {
	    win.focus();
	}
	else {
	    window.location = arguments[0];
	}
}