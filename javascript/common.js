$(document).ready(function() {
    
    // menu
    
    $(".submenu").hide();

    $(".menu>li").mouseover(function() {
        $(this).find(".submenu").stop().slideDown(500);
    });

    $(".menu>li").mouseout(function() {
        $(this).find(".submenu").stop().slideUp(500);
    });

    // quickmenu toTop

    $(".quickmenu li:last-child a").click(function() {
        toTop();
    });

    $(".top_mob").click(function() {
        toTop();
    });

    // img fade in & fade out

    $(".imglist li:gt(0)").hide();
    setInterval(function() {
         $(".imglist li:first-child").fadeOut().next('li').fadeIn(500).end().appendTo(".imglist");
     }, 3000);

    clearInterval();

});