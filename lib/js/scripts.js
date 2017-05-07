$(function(){
    $('.Header-menuBtn').on('click', function(){
        $('#header-menu').slideToggle('1000');
        $(this).find('i').toggleClass('fa-bars fa-close');
    });

});