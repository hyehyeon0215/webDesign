$('.notice>.content>ul>li').eq(0).on("click", function () {
    $(".popup, .popupBg").show();
});
$('.close').on("click", function () {
    $(".popup, .popupBg").hide();
});


$('#gnb>li').on('mouseover', function () {
    $('.gnbBg, .sub').stop().slideDown();
});
$('#gnb>li').on('mouseout', function () {
    $('.gnbBg, .sub').stop().slideUp();
});


setInterval (function () {
    $('.frame').animate({ 'left': "-1200px" }, function () {
        $('.frame>li').eq(0).appendTo(".frame");
        $('.frame').css({ 'left': 0 })
    })}, 3000);

