function show(){
    $('.menu-slide').animate({'margin-right': '0'},700)
}



    function hide(){
    interval = setInterval(function(){
        $('.menu-slide').animate({'margin-right': '-37%'},700)
    },10000);
}


$('.btn-prev').on('click',function(){
    show();
    hide();
});







