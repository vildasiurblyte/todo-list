const newTask = document.querySelector("input.task");
const list = document.getElementById("task-list");
const addItemBtn = document.querySelector("button.btn");
const deletes = document.getElementsByClassName("delete");
const checkbox = document.getElementsByClassName("checkbox");
const todoList = todoState();

addItemBtn.addEventListener ("click", () => {
  event.preventDefault();
  addTask();
})

onload = function() {
  todoState();
  appendToDom();
}

function todoState() {
  let todoArr = [];
  const todoString = localStorage.getItem("todolist");
  if (todoString != null) todoArr = JSON.parse(todoString); 
  return todoArr;
}

function addTask() {
  const item = newTask.value;
  if (newTask.value == " ") return alert("Add your to do task");
  todoList.push(item);
  localStorage.setItem("todolist", JSON.stringify(todoList));
  appendToDom();
}

function appendToDom() {
  let template = `<div id="container">`;          
  for (let i = 0; i < todoList.length; i++) {    
    template += 
    `<div class="item"><p>${todoList[i]}</p>
    <button class="delete" id="${i}" type="button">Remove</button>
    <input class="checkbox" id="${i}" type="checkbox">
    </div>`;
  }
  template += `</div>`;
  
  list.innerHTML = template;
  newTask.value = " ";

  for (let i = 0; i < todoList.length; i++) {
    deletes[i].addEventListener("click", removeTask);
    checkbox[i].addEventListener("click", markDone);
  }
}

function removeTask() {
  const id = this.getAttribute("id");
  todoList.splice(id, 1);
  localStorage.setItem("todolist", JSON.stringify(todoList));
  appendToDom();
}

function markDone() {
  const id = this.getAttribute("id");
  const item = document.getElementsByClassName("item");
  if (checkbox[id].checked) {
    item[id].style.backgroundColor = "#6DA67B";
    item[id].style.textDecoration = "line-through";
  } else {
    item[id].style.backgroundColor = "#fcbe4a";
    item[id].style.textDecoration = "none";
  }
}



