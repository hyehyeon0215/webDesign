
$(document).ready(function () {
    //다음 버튼이벤트가 발생하면, 보여질 패널의 순번을 구하여 슬라이딩을 합니다
    /*
    js vs jquery 무엇을 공부해야하는가??
    웹디자인, 웹퍼블만 하실것이다 jq 80% JS20정도의 공부를 하면되겠습니다
    웹퍼블 ++ 프론트엔드쪽으로 생각있으시면 js 80% jq 20으로 공부
    */
    var len = $('.panel>li').length;
    var enableClick = true;

    $('.next').on("click", function (e) {
        e.preventDefault();
        if (enableClick) {
            enableClick = false;
            var current_index = $('.panel>li').filter(".on").index();
            var next_index;
            if (current_index == len - 1) {
                next_index = 0;
            } else {
                next_index = current_index + 1;
            }

            moveNext(next_index);
        }
    })

    function moveNext(index) {
        $('.panel>li').filter('.on').stop().animate({ 'left': '-100%' }, 500, function () {
            $(this).removeClass('on').hide();
        });
        $('.panel>li').eq(index).show().css({ 'left': '100%' })
            .animate({ 'left': '0%' }, 500, function () {
                $(this).addClass('on');
                enableClick = true;
            })

            $('.navi>li').children('a').removeClass('on');
            $('.navi>li').eq(index).children('a').addClass('on');
    }

    $('.prev').on('click', function (e) {
        e.preventDefault();
        if (enableClick) {
            enableClick = false;
            // var current_index = $('.panel>li').filter(".on").index();
            var current_index = $('.panel>li.on').index();
            var prev_index;
            if (current_index == 0) {
                prev_index = len - 1;
            } else {
                prev_index = current_index - 1;
            }
            movePrev(prev_index);

        }
    })

    function movePrev(index) {
        $('.panel>li').filter('.on').stop().animate({ 'left': '100%' }, 500, function () {
            $(this).removeClass('on').hide();
        });
        //eq() 선택한요소의 인덱스 번호에 해당하는 요소를 찾습니다
        $('.panel>li').eq(index).show().css({ 'left': '-100%' })
            .animate({ 'left': '0%' }, 500, function () {
                $(this).addClass('on');
                enableClick = true;
            })

            $('.navi>li').children('a').removeClass('on');
            $('.navi>li').eq(index).children('a').addClass('on');
    }

            /*
            animate(); 제이쿼리 문법
            에니메이션 효과를 만듧. 
            .animate(해당 값 , 지속시간, (가속도), 이후에 적용될 코드(콜백) )
            지속시간 기본값 = 400 fast, slow로도 사용이 가능하고, fast=200, slow =600
            가속도 swing, linear 기본값이 swing 
    
            stop()메소드의 중요성
            애니메이션 함수를 구현할때 이전 에니메이션이 멈추기전까지 애니메이션이 동작하지
            않는 현상이 있습니다(원인은 js안에있는 콜스텍 큐)
            stop은 현재 동작하고 있는 에니메이션을 즉시 동작을 중단시키고
            다음 에니메이션을 적용하도록 합니다
            */

    $('.navi>li').on("click", function (e) {
        e.preventDefault();

        var current_index = $('.panel>li').filter('.on').index();
        var target_index = $(this).index();
        //current_index와target_index를 비교해서
        //같으면 반응을 해서는 안되고(return)
        //target_index가 크면 next로 이동
        //target_index가 작으면 prev로 이동

        if (target_index == current_index) { return; }
        if (target_index > current_index) {
            //넥스트로 이동
            moveNext(target_index);
        }
        if (target_index < current_index) {
            //이전으로 이동
            movePrev(target_index);
        }
        
    })

})