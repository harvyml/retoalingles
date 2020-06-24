$(function(){
	var slider = $('.slider');

	function moverD(){
	    slider.animate({marginLeft:'-'+100+'%'},700, function(){
	        $('.slider section:first').insertAfter('.slider section:last');
	        slider.css('margin-left', '+'+0+'%');
	    });
	}

	function autoplay(){
	    interval = setInterval(function(){
	        moverD();
	    },6000);
	}

	autoplay();

})