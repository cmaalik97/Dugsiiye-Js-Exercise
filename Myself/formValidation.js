const form=document.querySelector("#registration")

form.addEventListener("submit",function(event){
    event.preventDefault();
    const username=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const confirm=document.querySelector("#Confirm").value;
    const err=document.querySelector("#err");

    if(username === ""){
        err.textContent="Username rquired!!"
        return; //this means use first one rule of err
    }
    //email part
    const emailPatteern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.match(emailPatteern)){
        err.textContent="Email required!!"
        return;
    }

    //passwor
    if(password.length <8){
        err.textContent="password must be 8"
        return;
    };
    if(confirm != password){
        err.textContent=" confirm password is wrong"
        return;
    }
    err.textContent="Register Successfully";
    
    
})