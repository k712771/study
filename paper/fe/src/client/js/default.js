function animation() {
    let elems = Array.prototype.slice.call(document.querySelectorAll(".ani"));
    
    function scroll() {
        // console.log(document.body.scrollTop, document.documentElement.scrollTop)
        let 
            winScroll = document.body.scrollTop || document.documentElement.scrollTop
        ,   height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        ,   scrolled = ( winScroll / height ) * 100
        ,   elem = document.querySelector(".progress-bar")
        ;
        elem.style.width = scrolled + "%"
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