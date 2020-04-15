/*
	Navigation
*/
var nagivation = function () {
	// show and hide
	var lastScroll = 0;
	var $header = $("header");
	$(window).on("scroll", function () {
		var currentScroll = $(this).scrollTop();
		if (currentScroll > lastScroll && currentScroll >= $header.height()) {
			$header.addClass("hide");
		} else {
			$header.removeClass("hide");
		}
		lastScroll = currentScroll;
	});

	// responsive
	$("header .nav-toggle").on("click", function () {
		$(this).html("Menu");
		$("header").toggleClass("nav-responsive");
		if ($("header").hasClass("nav-responsive")) {
			$(this).html("Close");
		}
	});

	$("header nav ul li.dropdown span").on("click", function () {
		var $parent = $(this).parent();
		if (!$("header").hasClass("nav-responsive")) return;

		if ($parent.hasClass("open")) {
			$parent.find("ul").slideUp(300);
			$parent.removeClass("open");
		} else {
			$("header nav ul li.dropdown div").removeClass("open");
			$("header nav ul li.dropdown div > ul").slideUp(300);
			$parent.addClass("open");
			$parent.find("ul").slideDown(300);
		}
	});
}

/*
	Greeting Message
*/

var greetingMessage = function () {
	var date = new Date();
	var hour = date.getHours();
	var element = document.getElementById("greeting");

	var greetings = {
		night: [
			"Good night!",
			"Buenos noches!",
			"Hi! Still awake?",
			"Welcome!"
		],
		morning: [
			"Good morning!",
			"Buenos dias!",
			"Grüezi!",
			"Welcome!"
		],
		afternoon: [
			"Good afternoon!",
			"Hola! Qué tal?",
			"Grüezi!",
			"Welcome!"
		],
		evening: [
			"Hi there!",
			"Buenas tardes!",
			"Good evening!",
			"Welcome!"
		]
	}


	var getText = function (length) {
		var minimum = 1;
		var maximum = length;
		return Math.floor(Math.random() * (maximum - minimum + 1));
	}

	var timeOfDay = 'evening';

	if (hour >= 0 && hour <= 5) {
		timeOfDay = 'night';
	} else if (hour >= 6 && hour <= 11) {
		timeOfDay = 'morning';
	} else if (hour >= 12 && hour <= 17) {
		timeOfDay = 'afternoon';
	}

	element.innerHTML = greetings[timeOfDay][getText(greetings[timeOfDay].length)];
}



var typeThis = function () {
	var typed = new Typed('.typed', {
		strings: [
			"frontend development.",
			"people and psychology.",
			"football. ⚽️",
			"ultralearning. 🤓",
			"books.",
			"writing",
			"neuroscience.",
			"leadership.",
			"public speaking.",
			"design operations. 🎨",
			"philosophy.",
			"teaching.",
			"artificial intelligence. 🤖",
			"bio technology.",
			"remote working.",
			"financial freedom.",
			"travelling and cultures. 🌴",
			"personal growth. 🌱",
			"productivity.",
			"entrepreneurship.",
			"productive procrastination. 🙄"
		],
		typeSpeed: 50,
		backSpeed: 40,
		backDelay: 2200,
		fadeOut: true,
		shuffle: true,
		loop: true
	});
}

greetingMessage();
//nagivation();