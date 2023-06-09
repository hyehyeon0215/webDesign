$("#gnb>li").on("mouseover", function(){
    $(".sub, .gnbBg").stop().slideDown();
})

$("#gnb>li").on("mouseleave", function(){
    $(".sub, .gnbBg").stop().slideUp();
})


$("#slide .frame li").eq(0).siblings().hide();
let slideIndex = 0;

setInterval (function(){
    if (slideIndex < 2) {
        slideIndex++;
    }
    else {
        slideIndex = 0;
    }

    $("#slide .frame li").eq(slideIndex).siblings().fadeOut(500);
    $("#slide .frame li").eq(slideIndex).fadeIn(500);
}, 3000);


$("#notice>ul>li").eq(0).on("click", function(){
    $(".popup").css({'display' : 'block'});
})

$("#close").eq(0).on("click", function(){
    $(".popup").css({'display' : 'none'});
})