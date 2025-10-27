//JSON

async function fetchUser() {
    const user= await fetch("data.json")
   const Data= await user.json();
    console.log("user Dats: ",Data)
    
    
}
fetchUser()