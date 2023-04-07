function hoverGnb() {
    let
        btns = Array.prototype.slice.call(document.querySelectorAll(".gnb-box"))
    ,   contents = Array.prototype.slice.call(document.querySelectorAll(".sub-menu"))
    ,   idx = 0
    ;


    function show_layer() {
        btns.forEach(function( elem, i ) {
            if ( idx == i ) {
                // console.log("dsdd")
                contents[i].classList.add("on");
            } else {
                contents[i].classList.remove("on");
            }
        })
    }

    function append_event( e ) {
        //console.log( e )
        idx = btns.indexOf(e.currentTarget);
        //console.log(idx)
        show_layer(e);
        
    }
    function leave_listener( e ) {
        contents.forEach(function( content ) {
            // console.log(content)
            content.classList.remove("on")
        })
    }

    function event_listener() {
        btns.forEach(function(elem, i) {
            elem.addEventListener("mouseenter", append_event);
            elem.addEventListener("mouseleave", leave_listener);
        });
    };

    function init() {
        event_listener();
    };

    (function() {
        init();
    })();
}

new hoverGnb;
