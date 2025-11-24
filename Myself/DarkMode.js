const toggleButton=document.querySelector("#mode-toggle")
toggleButton.addEventListener("click",switchMode)

function switchMode(){
    document.body.classList.toggle("dark-mode")
    toggleButton.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        toggleButton.textContent="Toggle Light Mode"
        //now is local stroge 
        localStorage.setItem("mode","dark")
    }else{
        toggleButton.textContent="Toggle Dark Mode"
        localStorage.setItem("mode","light")
    }
}

window.addEventListener("DOMContentLoaded",function(){
   //local storage checking
   const saveMode=localStorage.getItem("mode")
   console.log(saveMode)
   if(saveMode === "dark"){
    document.body.classList.add("dark-mode")
    toggleButton.classList.add("dark-mode")
    toggleButton.textContent="Toggle Light Mode"
   }
   else{
    toggleButton.textContent="Toggle Dark Mode"
   }
})
 