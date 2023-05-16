$("#gnb > li").on("mouseenter", function(){
    $(this).find(".sub").stop().slideDown();
});

$("#gnb > li").on("mouseleave", function(){
    $(this).find(".sub").stop().slideUp();
});


$('#slide .frame li').eq(0).siblings().hide();
var slideIndex = 0;
setInterval(function(){
    
    if(slideIndex < 2) {
        slideIndex++;
    }
    else {
        slideIndex = 0;
    }

    $('#slide .frame li').eq(slideIndex).siblings().fadeOut(500);
    $('#slide .frame li').eq(slideIndex).fadeIn(500);

},3000);