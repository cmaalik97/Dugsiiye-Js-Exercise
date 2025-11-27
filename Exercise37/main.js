const blogPostform=document.querySelector("#Blogform")
const titlePost=document.querySelector("#titleBlog");
const imgPost=document.querySelector("#imgBlog")
const commentPost=document.querySelector("#CommentBlog")
const showPost=document.querySelector("#previewPost")
document.addEventListener("DOMContentLoaded",loaded)
function loaded(){
    const posts=getLocalStorage();
    const post=posts.forEach(element => {
        AddToDom(element)
        
    });
}
blogPostform.addEventListener("submit", AddPost)
function AddPost(e){
    e.preventDefault()
    const postTitle=titlePost.value.trim();
    const postImg=imgPost.value.trim()
    const postCommnet=commentPost.value.trim();

    if(postTitle != "" && postImg != "" && postCommnet != ""){
        const post={
            id :Date.now(),
            title:postTitle,
            img:postImg,
            comm:postCommnet,
        }
        AddToDom(post)
        saveLocalStorage(post)
        titlePost.value=""
        imgPost.value=""
        commentPost.value=""
    }
}

function AddToDom(post){
    const div=document.createElement("div")
    div.className="realPost"
    div.dataset.id=post.id;
   div.innerHTML=`
    <h3>${post.title}</h3>
    <img src="${post.img} ">
    <p>${post.comm}</p>
    <button class="edit-btn"> Edit</button>
    <button class="delet-btn"> Delete</button>
   `
   showPost.appendChild(div)

   EventAttachs(post , div)
   
}
function EventAttachs(post, div){
    const deleteBtn=div.querySelector(".delet-btn")
    const editBtn=div.querySelector(".edit-btn")
    deleteBtn.addEventListener("click",function(){
        clearPost(post.id ,div)
    })
    editBtn.addEventListener("click",function(){
       UpdatePost(post.id ,div)
    })
}
//delet btn
 function clearPost(postID, div){
    div.remove()
    //delet local
    const posts=getLocalStorage()
    const post=posts.filter(post => post.id != postID)
    localStorage.setItem("posts",JSON.stringify(post))
 }
 //update
 function UpdatePost(postID ,div){
    const oldtitle=div.querySelector("h3");
    const oldImg=div.querySelector("img");
    const oldComment=div.querySelector("p");

    const newTitle=prompt("Edit Your Title: " ,oldtitle.textContent)
    const newImg=prompt("URL img (optional): " ,oldImg.textContent)
    const newComment=prompt("Edit Description: " ,oldComment.textContent)

    if(newTitle.trim() != "" && newImg.trim() != "" && newComment.trim() != "" ){
        oldtitle.textContent=newTitle;
        oldImg.textContent=newImg;
        oldComment.textContent=newComment;
        //local storage
        const posts=getLocalStorage()
        const post=posts.find(post => post.id == postID)
        post.title=newTitle;
        post.img=newImg;
        post.comm=newComment;
        localStorage.setItem("posts",JSON.stringify(posts))

       

    }else{
        alert("Error !! repeat again")
    }

 }
function saveLocalStorage(post){
    const oldTasks=getLocalStorage()
    oldTasks.push(post)
    localStorage.setItem("posts", JSON.stringify(oldTasks))
}

function getLocalStorage(){
    const oldTasks=JSON.parse(localStorage.getItem("posts")) || [];
    return oldTasks;
}