function visibleWindow(){
	$('.cont-window').show(300);
	$('.contenedor').addClass('contenedor-ani');
}

function removeWindow(){
	$('.cont-window').hide(300);
    $('.contenedor').removeClass('contenedor-ani');
	
}

$('#close').on('click', function(){
	removeWindow()
})

function writteWindow(title, parrafo){
	$('.window-projects .window-projects-h2').text(title)
	$('.window-projects p').text(parrafo)	
}

$('#proyecto-1').on('click', function(){
	writteWindow('Lorem ipsum.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tenetur, quidem dicta sequi eaque repudiandae ipsum reiciendis atque asperiores iusto.');

	// No está permitido
	if($(window).outerWidth() < 400){
		console.log("No está permitido en moviles");
	}else{
		visibleWindow();
	}

})


$('#proyecto-2').on('click', function(){
	writteWindow('Lorem ipsum.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus fugit ipsa eaque, aliquam, consectetur iusto a temporibus cupiditate nulla!');
	

	// No está permitido
	if($(window).outerWidth() < 400){
		console.log("No está permitido en moviles");
	}else{
		visibleWindow();
	}
})


$('#proyecto-3').on('click', function(){
	writteWindow('Lorem ipsum.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officia, quibusdam voluptatum id harum at explicabo excepturi aliquid cupiditate! Tempora?');
	

	// No está permitido
	if($(window).outerWidth() < 400){
		console.log("No está permitido en moviles");
	}else{
		visibleWindow();
	}
})


$('#proyecto-4').on('click', function(){
	writteWindow('Lorem ipsum. Empresas', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates possimus fuga, mollitia numquam ipsum temporibus et accusantium nisi maiores perferendis.');

	// No está permitido
	if($(window).outerWidth() < 400){
		console.log("No está permitido en moviles");
	}else{
		visibleWindow();
	}
})


$('#proyecto-5').on('click', function(){
	writteWindow('Lorem ipsum.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio accusamus perferendis officia iusto, est assumenda quis blanditiis enim, repudiandae necessitatibus.');

	// No está permitido
	if($(window).outerWidth() < 400){
		console.log("No está permitido en moviles");
	}else{
		visibleWindow();
	}
})


$('#proyecto-6').on('click', function(){
	writteWindow('Lorem ipsum. tus Sitios', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolorum possimus, eaque rerum laborum ab, beatae quibusdam reprehenderit. Earum, sint!');

	// No está permitido
	if($(window).outerWidth() < 400){
		console.log("No está permitido en moviles");
	}else{
		visibleWindow();
	}
})

