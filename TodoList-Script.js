/* selectors */
    // Selected For Input.
const todoinput = document.querySelector('.todo-input');
    // Selected For Button Input.
const todoButton = document.querySelector('.todo-button');
    // Selected For Div Todo Content.
const todoContent = document.querySelector('.todo-content');
    // Selected For Ul Todo List.
const todoList = document.querySelector('.todo-list');
    // selected for felter todo.
const felterTodo = document.querySelector('.felter-todo');
    // selected for coloe buttons "div"
const colorButtons = document.querySelector(".color-buttons");
    // selected for dark mode button "button"
const darkButton = document.querySelector(".dark-button")
    

/* Event Listeners */
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deletedVerify);
felterTodo.addEventListener('click', felter)
darkButton.addEventListener('click', shangeColor);


/* Functions */

// function for creat list for todo
function addTodo(event){
    // Prevent Form Submitting
    event.preventDefault();

    // if input value 
    if (todoinput.value === ''){ // if dont have any value show alert
        alert('Please Type Something');

    }else{ // else active function

        // Creat Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        // Creat Todo li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todoinput.value;
        todoDiv.appendChild(newTodo); // put newTodo(li) in todoDiv(Div)
        
        // Creat Button for deleted
        const verifyButton = document.createElement('button');
        verifyButton.classList.add('verify-button');
        verifyButton.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(verifyButton); // put verifyButton(button) in todoDiv(Div)

        // Creat Button for deleted
        const deletedButton = document.createElement('button');
        deletedButton.classList.add('deleted-button');
        deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(deletedButton); // put deletedButton(button) in todoDiv(Div)

        // put todoDiv(Div) in todoList(ul)
        todoList.appendChild(todoDiv);
        
        // Clear Todo List Value
        todoinput.value = "";
    }
}

// function for verify and deleted buttons
function deletedVerify(e){
    const item = e.target ;
    // Deleted list Todo
    if (item.classList[0] === 'deleted-button'){
        const todo =  item.parentElement;
        todo.classList.add('deleted');
        todo.addEventListener('transitionend', function remove(e){
            todo.remove();
        });
    }else{}

    // Verify List Todo
    if (item.classList[0] === 'verify-button'){
        const todo = item.parentElement;
        todo.classList.toggle('verify')
    }else{}
}

// functon for selected option
function felter(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
                case "completed":
                    if (todo.classList.contains("verify")) {
                        todo.style.display = 'flex';
                } else{
                    todo.style.display = 'none';
                }
                break;
                case "uncompleted":
                    if (!todo.classList.contains("verify")){
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none'
                    }
        }
    })
}

// function for shange color for dark.
function shangeColor(){
    // selected body and shange color.
    const body = document.body;
    body.classList.toggle('dark-color-body');

    // selected body and shange color.
    const header = document.querySelector("header");
    header.classList.toggle("dark-color-header");
        // selected nav link itmes "a".
        const navitme1 = document.querySelector('.nav-itme-1');
        navitme1.classList.toggle("color-header-child");
        const navitme2 = document.querySelector('.nav-itme-2');
        navitme2.classList.toggle("color-header-child");
        const navitme3 = document.querySelector('.nav-itme-3');
        navitme3.classList.toggle("color-header-child");

    // selected for dark mode button "button"
    const darkButtonChild = document.querySelector(".dark-button i");
    darkButtonChild.classList.toggle('button-mode-befor');


    /* this part dont woeking!!!!! 
        // selected for all todo input function

        const todoList = document.querySelector('.todo-list');
        
        
        const todoItems = document.getElementsByClassName('todo-item');
        if (todoList.children[i].classList.contains(todo)){
            const todo = document.querySelector('.todo');
            todo.children.item
        }
    */

}