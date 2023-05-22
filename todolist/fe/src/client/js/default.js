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
        init();
    })()
}
new todo;
