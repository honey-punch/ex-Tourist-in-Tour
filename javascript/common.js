$(document).ready(function() {
    
    $(".submenu").hide();

    $(".menu>li").mouseover(function() {
        $(this).find(".submenu").stop().slideDown(500);
    });

    $(".menu>li").mouseout(function() {
        $(this).find(".submenu").stop().slideUp(500);
    });

});