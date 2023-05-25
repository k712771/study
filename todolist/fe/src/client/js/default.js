function todo() {
    const
        form = document.querySelector("#todo-form")
    ,   ul = document.querySelector(".todo-list")
    ,   input = form.querySelector("#todo-form input")
    ,   TODOS_KEY = "todos"
    ;
    let 
        toDos = []
    ;

    function saveToDos() {
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }


    function delete_listener(e) {
        let parent = e.target.parentElement.parentElement;
        parent.remove();
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(parent.id));
        saveToDos(); 
    }

    function createToDo(newList) {
        const li = document.createElement("li");
        li.id = newList.id;
        const card = document.createElement("div");
        const deleteButton = document.createElement("button");
        const cardtxt = document.createElement("p");
        deleteButton.innerText = '❌';
        deleteButton.addEventListener("click", delete_listener);
        card.classList.add("card-box");
        cardtxt.classList.add("card-content");
        cardtxt.innerText = newList.text;
        li.setAttribute("draggable", true);
        card.appendChild(cardtxt);
        card.appendChild(deleteButton);
        li.appendChild(card);
        ul.appendChild(li);
    }

    function append_event() {
        const newList = input.value;
        input.value = "";
        const newToDoObj = {
            text : newList,
            id : Date.now(),
        };
        toDos.push(newToDoObj);
        createToDo(newToDoObj);
        saveToDos();
    }

    function event_handle( event ) {
        event.preventDefault();
        append_event();
    }

    function event_listener() {
        form.addEventListener("submit", event_handle);

        const savedToDos = localStorage.getItem(TODOS_KEY)
        // console.log(savedToDos)
        if ( savedToDos !== null ) {
            const parsedToDos = JSON.parse(savedToDos);
            toDos = parsedToDos;
            parsedToDos.forEach(createToDo);
        }
    }
    function init() {
        event_listener();
    }
    (function() {
        init()
    })();
}

function dragNDrop() {
    const  list = document.querySelectorAll(".todo-list li");
    function move_listener( e ) {
        if ( e.touches ) e = e.touches[0];
        let elem = obj.targetElem;

        elem.style.setProperty("left", `${e.pageX - obj.x}px`);
        elem.style.setProperty("top", `${e.pageY - obj.y}px`);
        // console.log(elem) 따라오는거 확인
    }
    function mouseup_listener( e ) { 
        e.target.classList.remove("dragActive");
        window.removeEventListener("mousemove", move_listener);
        window.removeEventListener("touchmove", move_listener);
        window.removeEventListener("mouseup", mouseup_listener);
        window.removeEventListener("touchend", mouseup_listener);
    }

    function mousedown_listener( e ) {
        let c_target = e.currentTarget;
        
        if ( e.touches ) e = e.touches[0];

        obj = {
            targetElem: c_target,
            x: ( e.pageX - c_target.getBoundingClientRect().x ),
            y: ( e.pageY - c_target.getBoundingClientRect().y )
        };
        // console.log(e.pageX,e.pageY); 마우스 좌표
        // console.log(c_target.getBoundingClientRect().x, c_target.getBoundingClientRect().y); 현재 타켓이 화면 왼쪽으로부터 상대적 위치 값
        // console.log(obj);
        c_target.classList.add("dragActive");
        window.addEventListener("mousemove", move_listener);
        window.addEventListener("touchmove", move_listener);
        window.addEventListener("mouseup", mouseup_listener);
        window.addEventListener("touchend", mouseup_listener);
    }
    
    function event_listener() {
        if ( list.length > 0 ) {
            list.forEach(( elem ) => {
                elem.addEventListener("mousedown", mousedown_listener);
                elem.addEventListener("touchstart", mousedown_listener);
            })
        }
    }
    function init() {
        event_listener();
    }
    (function() {
        init()
    })();
}


new todo;
new dragNDrop;
