const colorPicker=document.querySelector("#colorPicker");
const colorPosition=document.querySelector("#colorPosition");
const colorList=document.querySelector("#colorList");
const btnClear=document.querySelector("#btnClear");

colorPicker.addEventListener("input",function(){
    const selectColor=colorPicker.value;
    colorPosition.style.backgroundColor=selectColor;
    HistoryColor(selectColor)
})

function HistoryColor(color){
    const Li=document.createElement("li");
    Li.textContent=color;
    Li.style.color=color;
    colorList.appendChild(Li);
}

btnClear.addEventListener("click",function(){
    colorList.textContent="";
})