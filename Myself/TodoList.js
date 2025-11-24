const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
document.addEventListener("DOMContentLoaded",loadTasks)

function loadTasks(){
    //getting old tasks from local storage
    const tasks=getTasksfromLocalStorage();
    
    tasks.forEach( task =>{
        addTaskDom(task)
    })

}
//Adding submit
todoform.addEventListener("submit", addTask)

function addTask(e) {
    e.preventDefault();

    const taskText = todoInput.value;
    // console.log((Date.now()))
    if (taskText !== "") {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        }
        //adding to the Dom
        addTaskDom(task);
        saveTaskToLocalStorage(task)
        //focos new input(wax sogali cusub)
        todoInput.value=""
    }


}
function addTaskDom(task) {
    //create li
    const li = document.createElement("li");
    // add a class style
    li.className = `todo-item ${task.completed ? "completed": ""}`
    //input lasoo galayo wax aan ku gareeno
    li.dataset.id = task.id;
    //li gudihiisa wax ku qor
    li.innerHTML = `
    <input type="checkbox" class="complete-checkbox" ${task.completed ? "checked" : ""}>
                <span class="task">${task.text}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
    `
    todoList.appendChild(li);
    todoInput.value=""

    //any event we do a method
    attachEventListeners(li,task)
}
function attachEventListeners(li,task){
    const deleteBtn=li.querySelector(".delete-btn")
    const editBtn=li.querySelector(".edit-btn")
    const checkbox=li.querySelector(".complete-checkbox")
    deleteBtn.addEventListener("click",function(){
        handleDelete(task.id,li)
    })

    editBtn.addEventListener("click",function(){
        handleEdit(task.id,li);
    })

    checkbox.addEventListener("change",function(){
        console.log(checkbox.checked)
        toggleTaskCompletion(task.id, li, checkbox.checked)

        
    })
}
function handleEdit(taskid, li){
    const taskSpan=li.querySelector(".task")
    console.log(taskSpan.textContent)
    const newTaskText=prompt("Edit your task: ", taskSpan.textContent)
    console.log(newTaskText)
    if(newTaskText !== null && newTaskText.trim() !== ""){
        //update localStorage
        updateTask(taskid,newTaskText)
        //Update Dom
        taskSpan.textContent=newTaskText;
    }
}

function updateTask(id, newTaskText){
    const tasks=getTasksfromLocalStorage();
    const task= tasks.find(task => task.id == id)

    if(task){
        task.text=newTaskText;
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

}
function handleDelete(id,li){
    let tasks=getTasksfromLocalStorage();
    tasks=tasks.filter(task=>task.id != id);
    localStorage.setItem("tasks",JSON.stringify(tasks))
    li.remove();
}

function toggleTaskCompletion(taskId, li , isCompleted){
    //local storage
    const tasks=getTasksfromLocalStorage();

    const task=tasks.find(task => task.id == taskId)

    if(task){
        task.completed=isCompleted;
        localStorage.setItem("tasks", JSON.stringify(tasks))
        li.classList.toggle("completed", isCompleted)
    }
}
//new function local storage
function saveTaskToLocalStorage(task){
    const oldtasks=getTasksfromLocalStorage()
    oldtasks.push(task)
    
    localStorage.setItem("tasks",JSON.stringify(oldtasks))
}
function getTasksfromLocalStorage(){
     const oldtasks=JSON.parse(localStorage.getItem("tasks")) || [];
     return oldtasks;
}

//how i do this project
//first we do html document
//second i made variables of calling html id
// third i made event of (toform) and  then function of addtask(what i enter input)
//remove spaces with trim()
//create object
// made check statement before object
// new function addtodom  with in create li and his class 
