const form=document.querySelector("#form")
const Message=document.querySelector("#forMessage")

form.addEventListener("submit",function(event){
    event.preventDefault()
    console.log("submit.........")
    Message.textContent="Prevent Default"
})