$(document).ready(function() {

    $("#gnb>li").on("mouseenter", function(){
        $(".sub").stop().slideDown();
    })

    $("#gnb>li").on("mouseleave", function(){
        $(".sub").stop().slideUp();
    })


    $("#notice>ul>li").eq(0).on("click", function(){
        $(".popup").css({"display" : "block"});
    })
    
    $("#close").on("click", function(){
        $(".popup").css({"display" : "none"});
    })


    $('.tab>li').on("click", function(){
        $('.tab>li').removeClass('on');
        $('.content>div').removeClass('on');
        $(this).addClass('on');

        var conId = $(this).find('a').attr('href');

        $(conId).addClass('on');
    })
    
    
    setInterval(function(){
        $('.frame').animate({left: '-1200px'}, function(){
            $('.frame>li').eq(0).appendTo(".frame");
            $('.frame').css({left : 0});
        })
    }, 3000);
})




