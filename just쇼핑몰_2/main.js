// gnb
$('#gnb').on('mouseenter', function () { $('.sub').stop().slideDown() });
$('#gnb').on('mouseleave', function () { $('.sub').stop().slideUp(); });
$('#gnb>li').on("mouseenter", function () { $(this).children('a').addClass("on"); });
$('#gnb>li').on("mouseleave", function () { $(this).children('a').removeClass('on'); });

    //tab
$('.tab>li').on('click', function(){
    $('.tab').find('li').removeClass('on');
    $('.content').find('div').removeClass('on');

    $(this).addClass('on');
    var conId = $(this).children('a').attr('href');
    $(conId).addClass('on');
})


// slide

// img 태그를 이용한 슬라이더에서는 밑 코드로 슬라이딩이 자연스럽지 않고 이미지만 바뀜
// 백그라운드로 넣은 이미지로 작성될 경우에만 밑 코드가 적용됨

// setInterval(function(){
//     var current_index = $('.frame>li').filter('.on').index();
//     var next_index;
//     if(current_index != $('.frame>li').length - 1) {
//         next_index = current_index + 1;
//     } else {
//         next_index = 0;
//     }

//     $('.frame>li').filter('.on').stop().animate({'bottom' : '-100%'}, 3000, function(){
//         $(this).removeClass('on').hide();
//     })
//     $('.frame>li').eq(next_index).show().css({'bottom':'100%'}).animate({'bottom' : '0%'}, 3000, function(){
//         $(this).addClass('on');
//     })
// },3000);


// slide

setInterval(function(){
    $('.frame').animate({top: '-300px'}, function(){
        $('.frame>li').eq(0).appendTo(".frame");
        $('.frame').css({top : 0});
    })
}, 3000);

$("#notice>ul>li").on("click", function(){
    $(".popup").css("display", "block");
});
$("#close") .click(function(){
    $(".popup").css("display", "none");
});