
const newTask = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const background = document.querySelector('section.card');
/* 
let h2 = document.createElement('h2');
let pvalue = 'Yay nothing to do!';
h2.textContent = pvalue;
h2.classList = "title";
h2.id = "title";
background.appendChild(h2); */

addItemButton.addEventListener('click', () => {
  event.preventDefault();
  addTask();
})

const checkbox = document.createElement('input');
function addTask () {
  let item = document.createElement('div');
  let list = document.getElementsByClassName('list-container')[0];
  const deletes = document.createElement('div');
  checkbox.classList = "checkbox";
  checkbox.type = "checkbox";
  deletes.innerHTML = `<button class='remove'>Remove</button>`;
  item.innerHTML = `<p>${newTask.value}</p>`;
  list.appendChild(item);
  item.appendChild(checkbox);
  item.appendChild(deletes);
  newTask.value = '';

  markAsDone();
}

function deleteTask () {
  list.removeChild(item);
}

function markAsDone () {
  checkbox.addEventListener('click', function (){
    if (checkbox.checked) {
      //li.style.textDecoration='line-through';
      //deletes.style.textDecoration = 'none';
      
    } else {
      item.style.textDecoration = 'none';
      item.style.background = "#fcbe4a";
    } 
  });

}
  
  
  