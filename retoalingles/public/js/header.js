$(document).ready(function(){

	// var altura = $('.frase').offset().top;
	// alert(altura);
	/*
	var altura = $(window).outerHeight(true);

	$('header').css({
		height: altura +'px'
	})
	*/

	var nav = $('.navigation')

	$(window).on('scroll', function(){
		$('.navigation').css({
			background: 'rgba(0,0,0,.6)'
		})

		if($(window).scrollTop() < 100){
			$('.navigation').css({
				background: 'rgba(0,0,0,.4)'
			})

		}
	});


	// menu de moviles

	$('.btn-menu-mobile').on("click", function(){
		$(".menu-mobile").show(300);

		$(".btn-menu-mobile").hide(300);
	})

	// esconder menu
	$(".btn-up-menu").on("click", function(){
		$(".menu-mobile").hide(300);
		$(".btn-menu-mobile").show(300);
	})


});
