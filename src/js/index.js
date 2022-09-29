gsap.registerPlugin(ScrollTrigger);
gsap.to(".gsap__opacity", {
	scrollTrigger: ".gsap__opacity",
	x: 0,
	duration: 1.5,	
	stagger: 0.2,
	opacity: 1
});
gsap.to(".gsap__header", {
	scrollTrigger: ".gsap__header",
	duration: 1.5,
	delay: 0.5,	
	stagger: 0.2,
	opacity: 1
});
gsap.to(".gsap__direction--title", {
	scrollTrigger: ".gsap__direction--title",
	duration: 1,		
	stagger: 0.2,
	opacity: 1,
	x: 0
});
gsap.to(".gsap__direction--tag", {
	scrollTrigger: ".gsap__direction--tag",
	delay: 0.2,
	duration: 1.5,	
	stagger: 0.3,
	opacity: 1,
	
});

//HEADER slide

//---------------------------------- ACCORDEON TABS
$(document).ready(function () {
$(".tab_contents").hide();
$(".tab_contents:first").show();
$("ul.tabss li").click(function () {
	$(".tab_contents").hide();
	var activeTab = $(this).attr("rel");
	$("#" + activeTab).fadeIn();
	$("ul.tabss li").removeClass("active");
	$(this).addClass("active");
	$(".tab_drawer_headings").removeClass("d_active");
	$(".tab_drawer_headings[rel^='" + activeTab + "']").addClass("d_active");
	/*$(".tabs").css("margin-top", function(){ 
		return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
	});*/
});
$(".tab_containers").css("min-height", function () {
	return $(".tabss").outerHeight() + 50;
});
$(".tab_drawer_headings").click(function () {
	$(".tab_contents").hide();
	var d_activeTab = $(this).attr("rel");
	$("#" + d_activeTab).fadeIn();
	$(".tab_drawer_headings").removeClass("d_active");
	$(this).addClass("d_active");
	$("ul.tabss li").removeClass("active");
	$("ul.tabss li[rel^='" + d_activeTab + "']").addClass("active");
});

//------------------------------------------------Header BURGER
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});

//-----------------------------------------------Adaptive SlickSlider 

});

//------------------------------------------- Anchor Slide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

//--------------------------------------------------Acordeon BLOCK
$(document).ready(function () {
	$('.block__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	
});

//---------------------------------------Slider

$('.work__slider').slick({
	infinite: true,
	slidesToShow: 1,
	initialSlide: 1,
	slidesToScroll: 1,
	dots: true,
	adaptiveHeight: true,
	speed: 1000,
	responsive: [
		{
			breakpoint: 775,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				adaptiveHeight: true,
			}
		},
	],
});