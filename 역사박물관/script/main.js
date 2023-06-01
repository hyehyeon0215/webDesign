$(document).ready(function () {

    //popup
    $("#notice>ul>li:nth-child(1)").on("click", function () {
        $("#popupBg").css("display", "block");
    })
    $("#close").on("click", function () {
        $("#popupBg").css("display", "none");
    })

    //gnb
    $("#gnb>li").on("mouseenter", function () {
        $(this).find("ul.sub").stop().slideDown();
    })
    $("#gnb>li").on("mouseleave", function () {
        $(this).find("ul.sub").stop().slideUp();
    })

    //slide
    setInterval(function () {
        $(".frame").animate({ "top": "-100%" }, 1000, function () {
            $(".frame>li").eq(0).appendTo(".frame");
            $(".frame").css({ "top": "0px" });
        })
    }, 3000);

})