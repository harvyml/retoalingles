// *******************************************************

var altura = $(window).outerHeight(true);
var ancho = $(window).outerWidth(true);

$('.mobile-navigation').css({
	height: 100+'%'
}) 

// ********************************************************

OcultarMenu()

$('.boton-menu-mobile').on('click',function(){
	MostrarMenu()
})

$('.salir').on('click', function(){
	OcultarMenu()
})

function MostrarMenu(){
	$('.mobile-navigation').css({
		left: 0
	}) 
}
function OcultarMenu(){
	$('.mobile-navigation').css({
		left: -100+'%'
	}) 
}


// **********************************************************