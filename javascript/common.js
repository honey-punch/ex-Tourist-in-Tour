$(document).ready(function() {
    
    $(".submenu").hide();

    $(".menu>li").mouseover(function() {
        $(this).find(".submenu").stop().slideDown(500);
    });

    $(".menu>li").mouseout(function() {
        $(this).find(".submenu").stop().slideUp(500);
    });

    // img fade in & fade out

    $(".imglist li:gt(0)").hide();
    setInterval(function() {
         $(".imglist li:first-child").fadeOut().next('li').fadeIn(500).end().appendTo(".imglist");
     }, 3000);

    
    // img slide

    // var imgs = 2;
    // var now = 0;

    // start();

    // function start() {
    //     $(".imglist>li").eq(0).siblings().animate({width: "-100%"});
    
    //     setInterval(function() {
    //         now = now==imgs?0:now+=1;
    //         $(".imglist>li").eq(now-1).animate({width: "-100%"});
    //         $(".imglist>li").eq(now).animate({width: "100%"});},3000);
    // }

    clearInterval();

});