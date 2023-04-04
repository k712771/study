function hoverEvent () {
    // console.log("Eee")
    let 
        btns = Array.prototype.slice.call(document.querySelectorAll(".li")),
        contents = Array.prototype.slice.call(document.querySelectorAll(".li ol")),
        idx = 0
    ;

    function show_event(e) {
        // console.log("Eeeeeee")
        btns.forEach(function(elem, i) {
            if ( idx == i ) {
                contents[i].classList.add("on");
            } else {
                contents[i].classList.remove("on");
            }
        })
    }
    function append_event( e ) {
        // console.log("Eee")
        idx = btns.indexOf(e.currentTarget)
        // console.log(idx)
        show_event(e);
    }
    function event_listener() {
        btns.forEach(function(elem, i) {
            elem.addEventListener("click", append_event)
        })
        
    }
    event_listener();
}
hoverEvent();
