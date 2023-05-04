// gnb
$('#gnb').on('mouseenter', function () { $('.sub').stop().slideDown() });
// id gnb에 마우스를 올리면 함수 실행
// 어떤 함수인가? sub 클래스에 슬라이드 다운이라는 애니메이션이 작동되는 함수
// 단 애니메이션은 거의 stop() 메서드를 이용해야 함 (반복 이벤트 동작 방지)
$('#gnb').on('mouseleave', function () { $('.sub').stop().slideUp(); });
// 슬라이드 업 코드
$('#gnb>li').on("mouseenter", function () { $(this).children('a').addClass("on"); });
// li(sub 메뉴)에 마우스가 올라가져 있을 때도 주메뉴에 활성화가 되어야 한다는 요구사항을 만족하기 위해 작성
// this -> 이벤트가 붙어지는 대상(맨앞)
$('#gnb>li').on("mouseleave", function () { $(this).children('a').removeClass('on'); });

//tab
// .tab은 공지사항/갤러리의 메뉴를 선택하는 요소
// li는 각각 notice, gallery를 가리킴
$('.tab>li').on('click', function(){
    // li를 클릭하면 해당 내용을 불러와야 함 (공지사항 클릭 시 notice, 갤러리 클릭 시 gallery를 불러 와야 함)
    
    /* 탭의 li를 클릭했을 때
    tab에서 li를 찾아서 on을 지움
    content에서 div를 찾아 on을 지움
    그리고 클릭한 li에 on을 붙임*/
    $('.tab').find('li').removeClass('on');
    $('.content').find('div').removeClass('on');

    /* 클릭한 대상의 a태그를 지정해서 그 a 태그 안의 속성 href의 값을 변수에 담음
    담아진 값을 콘솔로 보면 #notice 등임을 알 수 있음 (노출되어야 하는 id명)
    $(conId)를 하면 보며야 하는 요소를 선택하게 됨 그리고 on을 붙여줌 */
    $(this).addClass('on');
    var conId = $(this).children('a').attr('href'); //클릭한 li를 찾아야 하기 때문에 this ㅏㅅ용
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
// setInterval(콜백함수, 시간) 콜백함수에 반복적으로 적용할 함수를 넣고, 시간은 반복시간을 따라서
// 반복시간마다 콜백함수를 실행함
// ul인 frame을 top-300px 위로 올린 뒤 콜백 함수로 0 index의 li를 appendTo라는 메소드로 ul 맨 끝에 붙임
// 따라서 순환하는 슬라이드처럼 되도록 함
// 동시에 css를 top 0으로 맞추도록 하면서 부드럽게 슬라이드 되도록 함
// 단) css에 높이 값과 기준점(position)을 잡아주어야만 부드럽게 슬라이드 가능

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