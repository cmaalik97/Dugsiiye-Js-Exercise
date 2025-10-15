//Promises
 
// function fetchUserData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                let success=true;
//         if(success){
//             resolve({id:1,name:"abdi"})
//         }
//         else(
//             reject("failed to fech")
//         )

//         },2000)
     
//     })
// }

// fetchUserData()
//     .then((data)=>console.log("user data", data))
//     .catch((err)=>console.log(err))


function fetchUserData(){
    return new Promise ((resolve,rechact)=>{
        setTimeout(function(){
            const success=false;
            if (success){
                console.log("Yo made seriously ")
               resolve(
                {id:1, name:"ali",age:"20"}
               ) 
            }
            else{
                rechact("Error occur!!")
            }
        },2000)
    })
}
fetchUserData()
    .then((user)=>console.log("User Data: ",user))
    .catch(function(err){console.log(err)})