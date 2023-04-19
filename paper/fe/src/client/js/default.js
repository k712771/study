function animation() {
    let elems = Array.prototype.slice.call(document.querySelectorAll(".ani"));
    
    function scroll() {
         // console.log(document.documentElement.scrollTop)
        let 
            winScroll = window.scrollY || document.documentElement.scrollTop
        ,   height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        ,   scrolled = ( winScroll / height ) * 100
        ,   elem = document.querySelector(".progress-bar")
        ;
        elem.style.width = scrolled + "%";
        /** 
         스크롤 위치 값 가져오는 법

         1.window.scrollY
         2.document.scrollingElement.scrollTop
         3.document.documentElement.scrollTop
         4.document.querySelector('html').scrollTop

         -> 이들은 숫자로 반환함.
        
         스크롤로 프로그레스바 만들기

         1.스크롤 위치 값을 잡는다.
         2.전체 창크기와 현재 보이는 창을 뺀 값(전체 창 크기 값을 구해야하므로 현재 보이는걸 빼줘야 전체 창 크기가 정확히 나옴)을 백분율로 표현한다.
         3.백분율을 목표물의 style과 동등하게 지정해주면 끝

        */ 
    }

    function append_event() {
        // console.log("ok")
        elems.forEach(( elem ) => {
            // console.log(elem.getBoundingClientRect().top, window.innerHeight);
            if ( Math.abs(elem.getBoundingClientRect().top) >= window.innerHeight ) {
                elem.classList.remove("active")
            } else if ( elem.getBoundingClientRect().top - window.innerHeight <= 0 ) {
                elem.classList.add("active")
            }
        })
        scroll();
    }

    function event_listener() {
        // console.log(elems)
        elems.forEach(( elem, i ) => {
            // console.log(elem)
            window.addEventListener("scroll", append_event);
            window.addEventListener("load", append_event);
        })
    }
    function init() {
        event_listener();
    }
    (function () {
        init();
    })();
}
new animation;