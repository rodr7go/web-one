$(function(){
    $('.Header-menuBtn').on('click', function(){
        $('#header-menu').slideToggle('1000');
        $(this).find('i').toggleClass('fa-bars fa-close');
    });

    $(window).scroll(function (event){
        var scroll = $(window).scrollTop();
        if (scroll > 100){
            $('.Header-logo').width('50');
        }else {
            $('.Header-logo').width('80');
        }
    })


});