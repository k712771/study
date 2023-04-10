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

/*
const observer_node = function( callback, target_node = document.querySelector("body"), config = { attributes: true, childList: true, subtree: true, characterDataOldValue: true } ) {
    const observer = new MutationObserver( callback );
    observer.observe( target_node, config );
 }
 */

new hoverGnb;

/*
function clicka() {
    const btns = document.querySelectorAll(".btn:not([data-event-ok=true])");
    btns.forEach(( btn ) => {
        btn.dataset.eventOk = "true";
        btn.addEventListener("click", function() {
            alert("눌름");
            document.querySelector("footer").innerHTML = "<button type='button' class='btn'>bbb</button>";
        });
    });
}

observer_node( clicka );



observer_node(function() {
    console.log("변해따");
});
*/