$(function(){
	var btnS = $('.down-arrow');
// Scroll a la Primera Seccion
$('.go').on('click', function(){
	$('body').animate({scrollTop: 1094}, 800)
})

$('.btn-page').on('click', function(){
	$('body').animate({scrollTop: 1094}, 800)
})

btnS.on('click', function(){
	scroll();
});

function scroll(){
	$('body').animate({scrollTop: 1200},800);
}
// =========================================

$(window).on('scroll', function(){
	if($(window).scrollTop() > 617){
		$('.page h2').addClass('scale');
	}
	console.log($(window).scrollTop());
});

// =========================================


// =========================================

var ancho = $(window).outerWidth(true);

$(window).on('scroll', function(){

	if($(window).scrollTop() > 700){
		$('#form-datos').css({
			width: '40%'
		})


	}


	if($(window).outerWidth() < 1024){
		
			$('.page form').css({
				width: '100%'
			})
		}

})







// =========================================





// =========================================


})
