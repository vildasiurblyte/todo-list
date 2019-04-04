
const newTask = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const background = document.querySelector('section.card');
let list = document.querySelector('.list-container');


addItemButton.addEventListener('click', () => {
  event.preventDefault();
  addTask(); 
});


function addTask () {
  let toDoItem = document.createElement('div');
  toDoItem.id = `${newTask.value}`;
  toDoItem.innerHTML = 
    `<p>${newTask.value}</p>
        <div>
          <button id='delete' class='removeItemButton' type='button'>Remove</button>
        </div>`;

  list.appendChild(toDoItem);
  newTask.value = '';
  toDoItem.addEventListener('click', isDone, false);  
  removeItem();
}

function isDone (event) {
  if(event.target.tagName === 'P') {
  event.target.style.backgroundColor = 'green';
  }
}







/* list.addEventListener('click', (event) => {
  const item = document.getElementById(`${newTask.value}`);
  if(event.target == item) {
    event.target.style.backgroundColor = 'green';
  }
  if(event.target == document.getElementById('delete')) {
    list.removeChild(toDoItem);
  }
}) */






