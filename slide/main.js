$(document).ready(function () {
    // 다음 버튼 이벤트가 발생하면, 보여질 패널의 순번을 구하여 슬라이딩

    /* 
    js vs jquery 무엇을 공부해야 하는가?

    웹 디자인, 웹 퍼블만 할 것이다 -> 제이쿼리 80 자바스크립트 20 정도?
    웹 퍼블 ++ 프론트엔드 -> 제이쿼리 20 자바스크립트 80
    */

    var len = $('.panel>li').length;
    var enableClick =true;

    $('.next').on("click", function(e){

        e.preventDefault();

        if(enableClick) {
            
            enableClick=false;

            var current_index = $('.panel>li').filter(".on").index();
            var next_index;
    
            if (current_index == len - 1) {
                next_index = 0;
            } else {
                next_index = current_index + 1;
            }
    
            /* animate(); 제이쿼리 문법
            애니메이션 효과를 만듦
            .animate(해당 값, 지속 시간, (가속도), 이후에 적용될 코드(callback))
            지속시간 기본 값 = 400 fast, slow로도 사용이 가능함 fast=200, slow=600
            가속도 swing, linear 기본 값-swing
    
            stop() 메소드의 중요성
            애니메이션 함수를 구현할 때 이전 애니메이션이 멈추기 전까지 애니메이션이 동작하지 않는 현상이 있음 (원인은 큐)
            stop은 현재 동작하고 있는 애니메이션을 즉시 중단시키고 다음 애니메이션을 적용하도록 함
            */
    
            $('.panel>li').filter('.on').stop().animate({'left' : '-100%'}, 500, function(){
                $(this).removeClass('on').hide();
            });
    
            // hide(), show() 애니메이션을 나타내고, 사라지게 함
            // fadein, fadeout 메소드와 비슷함 근데 차이가 있음
    
            // css() 메소드는 제이쿼리가 스타일에 접근하는 방법
            // css(요소,값)으로 적용시키는데 여러 개의 효과를 넣어야 할 때는 css({요소:값, 요소:값})의 배열 형태로 작성
            $('.panel>li').eq(next_index).show().css({'left' : '100%'})
                .animate({'left' : '0%'}, 500, function() {
                $(this).addClass('on');
                enableClick=true;
            })
        }
        
    
    })

})