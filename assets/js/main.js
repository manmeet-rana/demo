$(window).on("load", function () {
	"use strict";
	//Preloader	
	$('.preloader').fadeOut();

	// Project filter
	var $container = $('.projects-filter .row');
	var $filter = $('#menu-filter');
	$container.isotope({
		filter: '*',
		layoutMode: 'fitRows',
		animationOptions: {
			duration: 750,
			easing: 'linear'
		}
	});

	$filter.find('a').on("click", function () {
		var selector = $(this).attr('data-filter');
		$filter.find('a').removeClass('active');
		$(this).addClass('active');
		$container.isotope({
			filter: selector,
			animationOptions: {
				animationDuration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});
});

$(function(){
	"use strict";
     // Wow intialize
	 new WOW().init();
	//Main Slider	
	$('.main-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		animateOut: 'fadeOut',
		smartSpeed:750,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	//Testimonial slider	
	$('.testimonial-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: true,
		autoplay: true,
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	//News Slider	
	$('.news-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		autoplay: true,
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			}
		}
	});

	//On scroll add class
	var header = $(".header-menu");
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			header.addClass("headerbg");
		} else {
			header.removeClass("headerbg");
		}

		if (scroll >= 400) {
			$(".scroll-to-top").fadeIn(300);
		} else {
			$(".scroll-to-top").fadeOut(300);
		}
	});
	// Search
	$('a[href="#search"]').on('click', function (event) {
		event.preventDefault();
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});

	$('#search, #search button.close').on('click keyup', function (event) {
		if (event.target === this || event.target.className === 'close' || event.keyCode === 27) {
			$(this).removeClass('open');
		}
	});

	// Contact from
	$('a[href="#contact-form"]').on('click', function (event) {
		event.preventDefault();
		$('#contact-form').addClass('open');
		$('#contact-form > form > input[type="text"]').focus();
	});
	$('#contact-form, #contact-form.close').on('click keyup', function (event) {
		if (event.target === this || event.target.className === 'close' || event.keyCode === 27) {
			$(this).removeClass('open');
		}
	});

	//Scroll to top
	$(".scroll-to-top").on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});


	$(".main-menu a").on('click', function (e) {
		e.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 80
		}, 1000);

	});

	//Mobile navigation
	$(".navbar-toggler").on('click', function () {

		$(".main-menu").slideToggle();
		$(".header-menu").toggleClass('bg-sh');
	});


});
