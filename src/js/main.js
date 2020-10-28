$(document).ready(function(){
	$('.preview__wrapper').slick({
		dots: true,
		arrows: false,
		// autoplay: true,
		// autoplaySpeed: 2000,
		infinite: false,
	});
	$('.header__burger').click(function(event) {
		$('.header__burger,.header-navigation').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



