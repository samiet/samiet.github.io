$(document).ready(function() {
    var dest;
    winResize();
    $('a[href^="#"]').click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top-dest;
        $('html, body').animate({
            scrollTop: destination
        }, 400);
    });
    $(window).resize(winResize);
    
    function winResize(){
        var menuHeight=$('.fixed-menu').height();
        if(menuHeight>60){
            $('#about').css('margin-top','120px');
            dest=110;
        }
        else if(menuHeight>30){
            $('#about').css('margin-top','60px');
            dest=50;
        }
        else{
            $('#about').css('margin-top','30px');
            dest=28;
        }
        $('.projects-links').css('height',$('.projects-links').width()+'px');
    }
});