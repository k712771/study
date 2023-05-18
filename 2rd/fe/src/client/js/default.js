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
    function leave_listener( e ) {
        let parent = e.currentTarget.parent;
        // console.log(parent)
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
function hoverListActive() {
    function enter_listener() {
        // console.log(btns)
        btns.forEach(( elem, i )=>{
            if(idx == i) {
                elem.classList.add("on")
            } else {
                elem.classList.remove("on")
            }
        })
    }
    function append_event( e ) {
        // console.log(e.currentTarget)
        idx = btns.indexOf(e.currentTarget);
        // console.log(idx)
        enter_listener();
    }
    function leave_event(e) {
        // console.log("vvv")
        // console.log(e)
        let parent = e.currentTarget.parentElement;
        // console.log(parent)
        if(!parent.contains(e.currentTarget)){
            console.log("aaa")
        }
    }

    function event_listener() {
        // console.log(btns)
        btns.forEach(( elem, i )=>{
            elem.addEventListener("mouseenter", append_event);
            elem.addEventListener("mouseleave", leave_event);
        })
    }
    (function() {
        var prd_slide = new Swiper(".prd-slide", {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                clickable: true,
              },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            breakpoints: {
                1300: {
                    slidesPerView: 4,
                  },
                1200: {
                    slidesPerView: 3,
                  },
                920: {
                    slidesPerView: 3,
                  },
                640: {
                    slidesPerView: 2,
                  },

                0: {
                    slidesPerView: 1,
                  },
            },
            on : {
                init : function() {
                    // console.log("init")
                    btns = Array.prototype.slice.call(document.querySelectorAll(".prd-list li"));
                    event_listener();
                }
            }
          });
    })();
}

function toggleOnlyMobileGnb() {
    let
        btn = document.querySelector(".m-gnb-btn")
    ,   layer = document.querySelector(".gnb-wrap")
    ;

    function append_event() {
        btn.classList.toggle("on");
        layer.classList.toggle("on");
    }

    function event_listener() {
        if ( btn ) btn.addEventListener("click", append_event);
    }
    function init() {
        event_listener();
    }
    (function() {
        init();
    })();
}


new toggleVideo;
new hoverOnlyGnb;
new hoverListActive;
new toggleOnlyMobileGnb;

/**
 * Swiper
 */


