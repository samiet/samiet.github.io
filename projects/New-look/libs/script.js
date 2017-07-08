$('#language').change(function(){
    var imgSrc = $(this).val();
    $('.welcome img').attr('src','img/'+imgSrc+'.png');
});
$('.header-menu').click(function(){
    $(this).toggleClass('drop');
});

var count=$('.like .count');
$('.like button').click(function(){
    if($(this).hasClass('clicked')){
        count.text(+(count.text())-1);
        $(this).removeClass('clicked');
    }
    else{
        count.text(+(count.text())+1);
        $(this).addClass('clicked');
    }
});

var owl=$(".owl-carousel");
owl.owlCarousel({
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        769:{
            items:3,
        },
        961:{
            items:5,
        }
    }
});
$('.owl-prev-button').click(function(){
    owl.trigger('prev.owl.carousel',[600]);
});
$('.owl-next-button').click(function(){
    owl.trigger('next.owl.carousel',[600]);
});