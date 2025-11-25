const todoform=document.querySelector("#todo-form")
const todoInput=document.querySelector("#todo-input")
const todoList=document.querySelector("#todo-List")
//local storage to dom we began this function this function reads tasks from Databases
document.addEventListener("DOMContentLoaded",loadTasks);
function loadTasks(){
    //getting old tasks from localStorage
    const tasks=getTasksFromLocalStorage();
    tasks.forEach(task =>{
        addToDom(task)
    })

}
//adding submit
todoform.addEventListener("submit", addTask)
function addTask(e){
    e.preventDefault();
    const taskText=todoInput.value.trim();
    if(taskText != " "){
        const task={
            id: Date.now(),
            text:taskText,
            completed:false,
        }
     
        addToDom(task);
        saveTaskToLocalStorage(task)
        todoInput.value= "";
    }
}
//Adding to Dom

function addToDom(task){
    //create element
    const li = document.createElement("li");
    //add class that helps to style
    li.className=`todo-item ${task.completed? "completed" : ""}`;
    //add id to reconise to the every task
    li.dataset.id=task.id;
    //now enter the input in the list <li>....</li> use innerHTML
    li.innerHTML=`
          <input type="checkbox" class="complete-checkbox"  ${task.completed? "checked": ""}>
                <span class="task">${task.text}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button> `
    //now i add to the Dom
    todoList.appendChild(li)

    //stat function about delet and edit
    attachEventListner(li,task)
}

function attachEventListner(li, task){
    const deletBtn=li.querySelector(".delete-btn");
    const editBtn=li.querySelector(".edit-btn")
    const checkbox=li.querySelector(".complete-checkbox")
    deletBtn.addEventListener("click",function(){
     handelDelete(task.id, li)
    })
    editBtn.addEventListener("click",function(){
        handelEdit(task.id, li)
    })
    checkbox.addEventListener("change",function(){
        console.log("checkec", checkbox.checked)
        toggleTaskCompletion(task.id, li , checkbox.checked)
    })
}
 function handelDelete(id, li){
    //first localStorage call
    let tasks=getTasksFromLocalStorage();
    //second localStorage filtering this will create new array with removed the one you clicked
    tasks=tasks.filter(task=>task.id != id)
    //thind localStorage update means remove the input deleted
    localStorage.setItem("tasks",JSON.stringify(tasks))
    console.log(tasks)
    //now update dom 
    li.remove();
    

 }
 function handelEdit(id,li){
    
    //update DOM
    //first get the type
    const spanText=li.querySelector(".task")
   // console.log(spanText.textContent)
   //second edit span
   const newSpanText=prompt("Edit your task: ", spanText.textContent)
    console.log(newSpanText)
    //now update the dom
    spanText.textContent=newSpanText;
    // Update local Storage
    upadateLocalStorage(id ,newSpanText)

 }
function toggleTaskCompletion(taskId,li , isComplete){
    
    //first call local storage
    const tasks=getTasksFromLocalStorage();
    const task=tasks.find(task => task.id == taskId)

    if(task){
        task.completed=isComplete;
        localStorage.setItem("tasks",JSON.stringify(tasks))
        li.classList.toggle("completed", isComplete)
    }
}
 function upadateLocalStorage(id, newText){

    const tasks=getTasksFromLocalStorage()
    const task= tasks.find(task=>task.id == id)
 
    if(task){
        task.text=newText;
        localStorage.setItem("tasks",JSON.stringify(tasks))
    }
    
        

 }



//LocalStorage
function saveTaskToLocalStorage(task){
   
   const oldTask=getTasksFromLocalStorage();
   oldTask.push(task)
   localStorage.setItem("tasks",JSON.stringify(oldTask))
   
}

function getTasksFromLocalStorage(){
    const oldTask=JSON.parse(localStorage.getItem("tasks")) || [];
    return oldTask;
}