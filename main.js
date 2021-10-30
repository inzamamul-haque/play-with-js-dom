

/* Get Element By id In Js Dom */

let header  = document.getElementById('header');
header.innerText = 'TO DO APP'
header.style.color = 'black'
header.style.marginTop = '10px'


/* Get Element By Class Name In Js Dom */

let itemUl = document.getElementById('items')
let items = itemUl.getElementsByClassName('item');
console.log(items);

for(let i=0; i<items.length; i++) {
    items[i].style.color = 'red';
}


/* Get Element By Tag Name In Js Dom */

let findByTagName = document.getElementsByTagName('h1')
console.log(findByTagName);
for(let i=0; i<findByTagName.length; i++) {
    findByTagName[i].style.color = 'blue';
}

/* Get Element By Query Selector 

In Query Selector you can find Element by Id and ClassName and tagName.

*/

const parentFindByClassName = document.querySelector('.item:last-child');
parentFindByClassName.style.color = 'blue';


const parentFindById = document.querySelector('#name')
parentFindById.style.color = 'green'
parentFindById.style.fontWeight = 'bold'



/* DOM Event
   Reference: https://www.w3schools.com/jsref/dom_obj_event.asp 
   Reference: https://www.w3schools.com/js/js_htmldom_events.asp
*/

header.addEventListener('mouseover', () => {
   header.style.backgroundColor = 'white';
});


let task = document.getElementById('new-task');
task.addEventListener('keyup', event => {
  console.log(event.target.value);
});

 /* select elements & assign them to variables */

 let newTask = document.querySelector('#new-task');
 let form = document.querySelector('form');
 let todoUl = document.querySelector('#items');
 let completeUl = document.querySelector('.complete-list ul');



/* functions */


let createTask = (task) => {
    /* create new element like if you can create li or input */

    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
    /* if you want find parent by children you need to use this.parentNode */
    let listItem = this.parentNode;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, completeTask) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');

    /* when click checkBox.onchange  complete task function is called */

    checkBox.onchange = completeTask;
}

let bindCompleteItems = function(taskItem, deleteTask) {
    console.log(task);
    console.log(deleteTask);

    let deleteButton = taskItem.querySelector('.delete');

    /* when click deleteButton.onclick delete task function is called */
    deleteButton.onclick = deleteTask;
}


/* Static todoUl */
for(let i=0; i< todoUl.children.length; i++ ) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}



/* Static completeUl */
for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);


