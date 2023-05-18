function changeInputValue() {
    let 
        // pw-i를 누르면 required의 type ps or text change
        btns = Array.prototype.slice.call(document.querySelectorAll(".pw-i"))
    ,   icons = Array.prototype.slice.call(document.querySelectorAll(".required"))
    ;

    function append_event( e ) {
        // console.log("Aaaa")
        // console.log(e.currentTarget)
        idx = btns.indexOf(e.currentTarget);
        // console.log(idx);
        btns.forEach(( btn, i ) => {
            if ( idx == i ) {
                btn.classList.toggle("on")
                if ( icons[i].type == 'password' ) {
                    icons[i].type = 'text'
                } else if ( icons[i].type == 'text' ) {
                    icons[i].type = 'password'
                }
            }
        })
    }

    function event_listener() {
        // console.log(icons, btns)
        if ( btns.length > 0 ) {
            btns.forEach(( btn, i )=> {
                btn.addEventListener("click", append_event);
            })
        }
    }
    function init() {
        event_listener();
    }
    (function() {
        init();
    })();
    return {
        init
    };
}

function inputNumber() {
    let inputs = Array.prototype.slice.call(document.querySelectorAll(".only-num"));
    
    function down_listener( e ) {
        let excusal = ['Backspace','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home','End','Tab','Delete','Insert','Ctrl','v'];
        // console.log(excusal)
        // console.log(e.key)
        // e.key >= 0 && e.key <= 9 라면 트루 그 외 false
        // console.log( excusal.indexOf(e.key) == -1 )
        if ( !(e.key >= 0 && e.key <= 9) && excusal.indexOf(e.key) == -1 ) {
            e.preventDefalut;
            alert("잘못된 입력입니다!!");
        };
    }
    
    function change_listener( e ) {
        // console.log(e.currentTarget)
        // keyup 이 되면 정규식 치환, 숫자 제외하고 다
        let val = e.target.value.replace(/[^0-9,-]/g,"");
        // console.log(val)
        e.target.value = val;
        // console.log(val)
    }

    function event_listener() {
        // console.log("Aaaa")
        inputs.forEach(( elem, i )=>{
            elem.addEventListener("keyup", change_listener);
            elem.addEventListener("change", change_listener);
            elem.addEventListener("keydown", down_listener);
        })
    }
    function init() {
        if ( inputs.length > 0 ) event_listener();
    }
    return init();
}
function activeIcon() {
    let 
        btns = document.querySelector(".input")
    ,   actives = Array.prototype.slice.call(document.querySelectorAll(".process-pw li"))
    ;

    function press_event( e ) {
        // console.log("aaaaaaa")
        actives.forEach(( elem, i )=>{
            if ( e.target.value.length > i ) {
                elem.classList.add("active");
            } else {
                elem.classList.remove("active");
            }
        })
    }

    function event_listener() {
        if ( btns ) btns.addEventListener("keyup", press_event);
    }
    function init() {
        event_listener();
    }
    return init();
}


new changeInputValue;
new inputNumber;
new activeIcon;


