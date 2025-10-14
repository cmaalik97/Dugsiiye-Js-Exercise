//Asynchronous and Synchronous
//Non-Blocking and Blocking

//Blocking
function fetchUserDataSync(){
    alert("Fetching user Data.")
    console.log("the info of student: ")
    return {id:1, name :" ali abdi"}
}
console.log("Starting fetching user data")
const user=fetchUserDataSync();
console.log(user)
console.log("this message is blocked until user data is fetched.")

 console.log(" ")
 console.log(" ")
 console.log(" ")
 console.log(" ")
//non-Blocking
function getUserData(callback){
    setTimeout(()=>{
        const user ={id:1, name:"john"}
         callback(user)
        console.log("After 2 minutes!!")
    },2000)
}
console.log("Starting to get user data ")
getUserData(function(user){
    console.log(user)
});

console.log("the messages gets now")