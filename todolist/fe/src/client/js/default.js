function todo() {
    let
        form = document.querySelector("#todo-form")
    ,   ul = document.querySelector(".todo-list")
    ,   input = form.querySelector("#todo-form input")
    ,   toDos = []
    ;

    function saveToDos() {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }


    function delete_listener(e) {
        let parent = e.target.parentElement.parentElement;
        parent.remove();
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
    }
    function init() {
        event_listener();
    }
    (function() {
        init();
    })()
}
new todo;
