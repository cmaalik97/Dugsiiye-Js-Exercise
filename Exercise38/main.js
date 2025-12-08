const toggoleButton=document.querySelector(".toggleButton")

const navbar=document.querySelector(".navbar")

toggoleButton.addEventListener("click",function(){
    navbar.classList.toggle("active")
})