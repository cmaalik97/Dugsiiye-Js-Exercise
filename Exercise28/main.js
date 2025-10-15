//Async and await
function fetchData(){
    return new Promise(function(resolve,rechact){
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve({id:2,name:"Ali"})
            }
            else {
                rechact("Fetch Erred")
            }
        },200)
    })
}

async function displayData(){
    try{
        const user= await fetchData();
         console.log(user)
    }
    catch(err){
        console.log(err)
    }
 
}

displayData()

