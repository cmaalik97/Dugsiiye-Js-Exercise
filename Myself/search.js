//searching youtube videos
const searchForm=document.querySelector("#search-form").addEventListener("submit", async function(e){
    e.preventDefault()
    const query=document.querySelector("#search-input").value;
  
    if(!query==""){

    
    
   // 1) inaan linkaga so helno
   const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}&type=video`
   
   //2) inaan aqoonsi usameeno linkiga aan direeno wax lagu aqoonsayo waxaan aqoonsigas kusamenena qeebta headerska 
   const options={
    method : "GET",
    headers:{
       

        'x-rapidapi-key': '123299670fmsh8554540f0b01bd0p1a63fdjsn88274047c3a5',
		'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
    }
   }

 try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.data)
    displayVideo(result.data)
} catch (error) {
	console.error(error);
}
 } else{
        alert("it empty search!")
    }


})

function displayVideo(videos){
    const videoList=document.querySelector("#video-list")
    videoList.innerHTML = "";

    videos.forEach(video => {
        const videoItem=document.createElement("div");
        videoItem.className= "video-item";
        videoItem.innerHTML=`
            <div class="video-thumbnail" style="background-image: url('${video.thumbnail[0].url}') ; width:320px; height: 300px;"></div>
               <div class="video-info">
            <div class="video-title">${video.title}</div>
            <div class="video-channel">${video.channelTitle}</div>
            </div>
        `;
        videoItem.addEventListener("click",function(){
            OpenModel(video.videoId)
        })
        videoList.appendChild(videoItem)
        
    });

}

function OpenModel(videoId){
    const model=document.querySelector("#video-model")
    const videoPlayer=document.querySelector("#video-player")
    const videoUrl=`https://www.youtube.com/embed/${videoId}`
    videoPlayer.src=videoUrl;
    model.style.display="block"


    //downloaded

    document.querySelector("#download-btn").addEventListener("click",async function(){

         // 1) inaan linkaga so helno
   const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;

   //2) inaan aqoonsi usameeno linkiga aan direeno wax lagu aqoonsayo waxaan aqoonsigas kusamenena qeebta headerska 
   const options={
    method : "GET",
    headers:{
       

        'x-rapidapi-key': '123299670fmsh8554540f0b01bd0p1a63fdjsn88274047c3a5',
		'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
    }
   }
     try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result)
    if(result.status=="ok"){
        window.location.href=result.link
    }
    else{
        alert("error downloading")
    }
    
    } catch (error) {
	console.error(error);
    }
    })
}
//close point
document.querySelector("#close-model").addEventListener("click", closeModel)

function closeModel(){
     const model=document.querySelector("#video-model")
    const videoPlayer=document.querySelector("#video-player")
    videoPlayer.src="";
    model.style.display="none";


}

window.onclick=function(event){
 const model=document.querySelector("#video-model")
  if(event.target==model){
    closeModel();
  }
}