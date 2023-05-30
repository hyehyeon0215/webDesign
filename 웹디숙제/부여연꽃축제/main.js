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

$('.notice>.content>ul>li').eq(0).on("click", function(){
    $(".popup, .popupBg").css({"display" : "block"});
})
$('#close').on("click", function() {
    $(".popup, .popupBg").css({"display" : "none"});
})


$("#gnb>li").on('mouseover', function () {
    $(this).children(".sub").stop().slideDown();
});
$("#gnb>li").on('mouseout', function () {
    $(this).children(".sub").stop().slideUp();
});