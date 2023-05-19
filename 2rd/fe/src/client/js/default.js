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
        e.currentTarget.classList.remove("on")
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

function hoverGnb() {
    let
        btns = Array.prototype.slice.call(document.querySelectorAll(".gnb-menu"))
    ;

    function append_event( e ) {
        idx = btns.indexOf(e.currentTarget);
        btns.forEach(( elem, i )=>{
            if ( idx == i ) {
                elem.classList.add("on") 
            } else {
                elem.classList.remove("on") 

            }
        })
    }

    function leave_event( e ) {
        e.currentTarget.classList.remove("on")
     }


    function event_listener() {
        btns.forEach(( elem )=>{
            elem.addEventListener("mouseenter", append_event);
            elem.addEventListener("mouseleave", leave_event);
        })
    } 

    function init() {
        event_listener();
    }
    (function() {
        init();
    })();
}

function toggleGnb() {
    let 
        btn = document.querySelector(".m-gnb-btn")
    ,   layer = document.querySelector(".m-gnb-wrap")
    ; 
    function event_listener() {
        if ( btn ) btn.addEventListener("click", function( e ) {
                e.currentTarget.classList.toggle("on");
                layer.classList.toggle("on")
        });
    }
    function init() {
        event_listener();
    }
    (function() {
        init();
    })();
}

function scrollAni() {
    let elems = Array.prototype.slice.call(document.querySelectorAll(".ani"));

    function append_event( e ) {
        // console.log(elems)
        elems.forEach(( elem, i )=>{
            const delay = elem.getAttribute("delay") ? elem.getAttribute("delay") : 0;
            elem.style.setProperty("transition-delay", delay + "ms");
            //console.log(Math.abs(elem.getBoundingClientRect().top), window.innerHeight);
            if ( Math.abs(elem.getBoundingClientRect().top) >= window.innerHeight ) {
                elem.classList.remove("active");
            } else if ( (elem.getBoundingClientRect().top) - window.innerHeight <= 0) {
                elem.classList.add("active");
            }
        })
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

new toggleVideo;
new hoverListActive;
new hoverGnb;
new toggleGnb;
new scrollAni;


/**
 * Swiper
 */


