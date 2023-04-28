// 닿으면 애니메이션
// 속도조절
// 스크롤 백분율로 프로그레스바

// 공통 이벤트
// scroll, load
// 효과 3가지

function pageAnimation() {
    let
        elems = Array.prototype.slice.call(document.querySelectorAll(".ani"))
    ,   bar = document.querySelector(".progress-bar")
    ;
    function progressAni() {
        let
            windowHeight = window.scrollY || document.documentElement.scrollTop
        ,   height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        ,   calc = ( windowHeight / height ) * 100
        ;
        bar.style.width = calc + "%"
    } 
    function scrollAni() {
        // getAttribute delay transition-delay:10ms
        let scrT = window.scrollY || window.pageYoffset;
        elems.forEach(( elem, i ) => {
            let delay = elem.getAttribute("delay") ? elem.getAttribute("delay") : 0;
            elem.style.setProperty("transition-delay", delay + "ms");
            if(Math.abs(elem.getBoundingClientRect().top) >= window.innerHeight) {
                elem.classList.remove("active");
            } else if ( elem.getBoundingClientRect().top - window.innerHeight <= 0) {
                elem.classList.add("active");
            }
        });
        
    }
    function append_event() {
        progressAni();
        scrollAni();
    }
    function event_listener() {
        window.addEventListener("scroll", append_event);
        window.addEventListener("load", append_event);
    }
    function init() {
        event_listener();
    }
    (function() {
        init();
    })();
}

new pageAnimation;