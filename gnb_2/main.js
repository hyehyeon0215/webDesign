$(document).ready(function() {

    $('#gnb>li').on('mouseenter', function(){
        $(this).children('ul').stop().slideDown();
        $(this).children('a').stop().addClass('on');
    })
    
    $('#gnb>li').on('mouseleave', function(){
        $(this).children('ul').stop().slideUp();
        $(this).children('a').stop().removeClass('on');
    })
})