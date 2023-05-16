function toggleVideo() {
    let 
        btn = document.querySelector(".play")
    ,   video = document.querySelector("video")
    ;

    function event_listener() {
        if ( btn ) btn.addEventListener("click", ( elem, i )=> {
            // console.log(video)
            video.paused ? video.play() : video.pause();
            video.paused ? btn.classList.remove("paused") : btn.classList.add("paused");
        })
    }
    function init() {
        event_listener();
    }
    (function() {
        init();
    })();
}

function hoverOnlyGnb() {
    let 
        elems = Array.prototype.slice.call(document.querySelectorAll(".gnb>li"))
    ,   gnb = document.querySelector(".gnb")
    ;

    function enter_listener( e ) {
        // console.log("Dd")
        // console.log(e.currentTarget);
        idx = elems.indexOf(e.currentTarget);
        // console.log(idx)
        elems.forEach(( elem, i )=>{
            if ( idx == i ) {
                elem.classList.add("on")
            } else {
                elem.classList.remove("on")
            }
        })
    }
    function leave_listener() {
    }



    function event_listener() {
        // console.log(elems)
        elems.forEach((elem)=>{
            elem.addEventListener("mouseenter", enter_listener);
            elem.addEventListener("mouseleave", leave_listener);
        })
        
    }

    function init() {
        event_listener();
    }
    (function() {
        init();
    })()
}
new toggleVideo;
new hoverOnlyGnb;