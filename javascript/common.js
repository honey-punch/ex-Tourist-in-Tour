$(document).ready(function() {
    
    $(".submenu").hide();

    $(".menu>li").mouseover(function() {
        $(this).find(".submenu").stop().slideDown(500);
    });

    $(".menu>li").mouseout(function() {
        $(this).find(".submenu").stop().slideUp(500);
    });

    // img fade in & fade out
    // $(".imglist li:gt(0)").hide();
    setInterval(function() {
        $(".imglist li:first-child").fadeOut().next('li').fadeIn().end().appendTo(".imglist");
    }, 3000);

});