
$(window).on('scroll', function(){
	// alert('scroll');
	if($(window).scrollTop() > 100){
		$('.navigation').addClass('navigation-query');
		$('.navigation .menu .a-menu').addClass('a-query');
        $('.navigation .menu .a-menu-in').css('color', '#68e8ca');
	}

	else{
		$('.navigation').removeClass('navigation-query');
		$('.navigation .menu .a-menu').removeClass('a-query');
        $('.navigation .menu .a-menu-in').css('color', '#000');
	}
});

// ============================================================

var altura = $('.navigation').outerHeight(true);

$('.container').css({
	marginTop: altura+'px'
});

// ============================================================


var up = $('#up');

function scroll(){
	$('body').animate({scrollTop: 0},800);
}

up.on('click', function(){
	scroll();
});
