//wicitanka 
const colorPicker=document.querySelector("#colorPicker")
const colorPreview=document.querySelector("#colorPreview")
const colorHistory=document.querySelector("#colorHistory")
const clearHistoryButton=document.querySelector("#clearHistoryButton")

//events now
colorPicker.addEventListener("input",function(){
    const selectColor=colorPicker.value;
    colorPreview.style.backgroundColor=selectColor;
    document.body.style.backgroundColor=selectColor;
    document.body.style.color="white";
    addHistory(selectColor);
})

function addHistory(color){
    const li=document.createElement("li")
    li.textContent=color;
    li.style.color=color;
    colorHistory.appendChild(li)
}

clearHistoryButton.addEventListener("click",function(){
    colorHistory.innerHTML="";
})

