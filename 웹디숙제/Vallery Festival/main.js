
setInterval (function(){
    $("#slide>.frame").animate({"left" : "-750px"}, function(){
        $("#slide>.frame>li").eq(0).appendTo("#slide>.frame")
        $("#slide>.frame").css({"left" : 0})
    })
},3000);

$("#gnb>li").on('mouseover', function () {
    $(this).children(".sub").stop().slideDown();
});
$("#gnb>li").on('mouseout', function () {
    $(this).children(".sub").stop().slideUp();
});

$('.notice>.content>ul>li').eq(0).on("click", function(){
    $(".popup, .popBg").css({"display" : "block"});
})
$('#close').on("click", function() {
    $(".popup, .popBg").css({"display" : "none"});
})