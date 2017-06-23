$(function(){
    $('.Header-menuBtn').on('click', function(){
        $('#header-menu').toggle();
        $('.Header-nav-list').css('height', '100vh');
        $(this).find('i').toggleClass('fa-bars fa-close');
    });
    $('.list-target a').on('click', function(event){
        event.preventDefault();
        $('#header-menu').slideUp();
        $('.Header-menuBtn').find('i').toggleClass('fa-close fa-bars');
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1500);
    });

    // let writing = str => {
    //     let arrFromStr = str.split('');
    //     let i = 0;
    //     let printStr = setInterval(function(){
    //         document.querySelector('.auto-text').innerHTML += arrFromStr[i];
    //         i++;
    //
    //         if(i === arrFromStr.length){
    //             clearInterval(printStr);
    //         }
    //     },500);
    // }

    var writing = function (str){
        var arrFromStr = str.split('');
        var i = 0;
        var printStr = setInterval(function(){
            document.querySelector('.auto-text').innerHTML += arrFromStr[i];
            i++;

            if(i === arrFromStr.length){
                clearInterval(printStr);
            }
        },200);
    };

    writing('Bienvenido a "Nombre del sitio de tu web"');
});