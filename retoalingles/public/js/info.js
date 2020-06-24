$(".show-questions i").on("click", function(){
	$(".questions .hidden").show(500);
	$(".show-questions").hide(300);
	$(".hide-questions:first").show(300);
})

// Esconder

$(".hide-questions:first").on("click", function(){
	$(".questions .hidden").hide(500);
	$(".show-questions").show(300);
	$(".hide-questions:first").hide(300);
})