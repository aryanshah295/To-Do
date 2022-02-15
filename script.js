//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const header = document.querySelector("h1");
//console.log(",,,,,,,");

//EventListeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', checkRemove)
header.addEventListener('click', refresh)

//Functions
function addTodo(event){
    event.preventDefault();
    //add divs
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //creating li inside the div
    const newTodo = document.createElement('li');
    newTodo.innerText = (todoInput.value);
    newTodo.classList.add("todo-item");
    //appending the created li in the div
    todoDiv.appendChild(newTodo);
    //adding checked button
    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';
    checkedButton.classList.add('checked-btn');
    todoDiv.appendChild(checkedButton);
    //adding remove button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fas fa-trash"></i>';
    removeButton.classList.add('remove-btn');
    todoDiv.appendChild(removeButton);
    //appending the created div to the list
    todoList.appendChild(todoDiv);
    //reseting the todo after creating a new todo
    todoInput.value = "";

}

function checkRemove(e){
    const item = e.target;
    if(item.classList[0]=='remove-btn'){
       // console.log("hahaha");
        item.parentElement.classList.add('slideOut');
        //item.parentElement.remove();
        item.parentElement.addEventListener('transitionend',function(){
            item.parentElement.remove();
        })
    }
    if(item.classList[0]=='checked-btn'){
        item.parentElement.classList.toggle("completed");
    }
        
        
}

function refresh(event){
    document.location.reload();
}