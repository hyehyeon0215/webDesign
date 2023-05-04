$(document).ready(function(){

    
    // gnb
    $('#gnb').on('mouseenter', function(){
        $('.sub').stop().slideDown();
    });

    $('#gnb').on('mouseleave', function(){
        $('.sub').stop().slideUp();
    });

    $('#gnb>li').on("mouseenter",function(){
        $(this).children('a').addClass("on");
    });

    $('#gnb>li').on("mouseleave",function(){
        $(this).children('a').removeClass("on");
    })

    //tab
    $('.tab>li').on('click', function(){
        $('.tab').find('li').removeClass('on');
        $('.content').find('div').removeClass('on');

        $(this).addClass('on');
    })
});