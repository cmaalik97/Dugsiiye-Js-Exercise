//dark and light test
const dark=document.querySelector("#Dark");
const light=document.querySelector("#Light");
//now is event
dark.addEventListener("click",function(){
    document.body.style.backgroundColor="black";
    document.body.style.color="white"
});
light.addEventListener("click",function(){
    document.body.style.backgroundColor="white";
    document.body.style.color="black"
})
const Color=document.querySelector("#color");
const selected=document.querySelector("#selectedColor");

//Change Events
Color.addEventListener("change",function(){
    const valueColor=Color.value;
    if(valueColor == "red"){
        document.body.style.backgroundColor="red";
        document.body.style.color="white";
        selected.textContent=`Selected Color: ${valueColor}`
    }
    else if(valueColor== "blue"){
        document.body.style.backgroundColor="blue"
        document.body.style.color="white";
         selected.textContent=`Selected Color: ${valueColor}`
    }
    else if(valueColor== "green"){
        document.body.style.backgroundColor="darkgreen"
        document.body.style.color="white";
         selected.textContent=`Selected Color: ${valueColor}`
    }
    //selected.textContent="Selected Color :"+Color.value;
   

  
})

//Username
const username=document.querySelector("#username");
const current=document.querySelector("#currentUser")
username.addEventListener("change",function(){
    current.textContent=`Current Username: ${username.value}`
})