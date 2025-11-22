//submit
const form=document.querySelector("#registration");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const confirm=document.querySelector("#confirm");
const err=document.querySelector("#err")
const sucsses=document.querySelector("#succsess")
form.addEventListener("submit",function(event){
    event.preventDefault();
    err.textContent="";
    sucsses.textContent="";
    const isvalidateUsename=validUsername();
    const isvalidemail=validemail();
    const isvalidPassword=validPassword();
    const isvalidConfirm=validConfirm();
    if(!isvalidateUsename){
        username.focus();
        return
    }
    else if(!isvalidemail){
        email.focus();
        return
    }else if(!isvalidPassword){
        password.focus();
        return
    } else if(!isvalidConfirm){
        confirm.focus();
        return
    }

    sucsses.textContent="Registered Successfully!!"

})
function validUsername(){
    if(username.value.trim() === ""){
        //err
        setError(username,"Username required!!")
        return false;
    }
    else{
        //success
        setSuccess(username)
        return true;
    }
}

function validemail(){
    //err
    
    const emailPatteern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(!email.value.match(emailPatteern)){
        setError(email,"Email is incorrect!!")
        return false
    }
    else{
        setSuccess(email)
        return true
    }
    //success
}

function validPassword(){
    //err
    if(password.value.length < 8){
        setError(password,"Password must be 8!")
        return false;
    }
    else{
        setSuccess(password)
        return true;
    }
}
function validConfirm(){
    //err
    if(password.value.trim() ==="" || confirm.value.trim() === ""){
        setError(confirm,"Passowd do not muched password!")
        return false;
    }
    if(confirm.value !== password.value){
        setError(confirm,"Passowd do not muched password!")
        return false;
    }
    else{
        setSuccess(confirm)
        return true;
    }
}


function setError(element, message){
    element.classList.add("invalid")
    element.classList.remove("valid")
    err.textContent=message;
}
function setSuccess(element){
    element.classList.add("valid")
    element.classList.remove("invalid")
    
}
