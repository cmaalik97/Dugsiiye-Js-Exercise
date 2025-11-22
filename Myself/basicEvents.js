const button=document.querySelector("#myButton");
const btn=document.querySelector("#btn")

// button.addEventListener("click",function(){
//     alert("Hi welcome")
// })
// you can also do this
// document.querySelector("#myButton").addEventListener()

function handleclick(){
    console.log("You clicked");

}

button.addEventListener("click",handleclick);
btn.addEventListener("click",function(){
    button.removeEventListener("click", handleclick);
    console.log("pous click")
})
