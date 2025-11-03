//DOM With insert and remove items
const List=document.querySelector("#List");

//Add Items
function AddItems(){
    //creat the list tag element
    const newItem=document.createElement("li");
    //add the value
    
    newItem.textContent="Item 4"
    List.appendChild(newItem)
}

function RemoveItems(){
    if(List.lastChild){
         List.removeChild(List.lastChild)
    }
    else{
        alert("END!!")
    }
   
}