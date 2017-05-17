$(function(){
    $('.Header-menuBtn').on('click', function(){
        $('#header-menu').toggle();
        $(this).find('i').toggleClass('fa-bars fa-close');
    });
    $('#header-menu li a').on('click', function(event){
        event.preventDefault();
        $('#header-menu').slideUp();
        $('.Header-menuBtn').find('i').toggleClass('fa-close fa-bars');
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1500);
    });

    // $(window).scroll(function (event){
    //     var scroll = $(window).scrollTop();
    //     if (scroll > 100){
    //         $('.Header-logo').width('50');
    //     }else {
    //         $('.Header-logo').width('80');
    //     }
    // });
});