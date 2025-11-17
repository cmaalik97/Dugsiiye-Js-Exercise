//modifying img src


function changeImg(){
    const imgs=document.querySelector("#img");
    const newImg=prompt("Enter the url of img ?")
    const border=prompt("Enter the border color ?")
    const width=prompt("Enter the width of the img (as pixels)")
    const height=prompt("Enter the height of the img (as pixels)")
    const radius=prompt("Enter the border radius size (as pixels)")
    const paddingimg=prompt("Enter the padding size (as pixels)")
    const backgcolor=prompt("Enter background color?")

    imgs.setAttribute("src",newImg)
    imgs.style.border=`2px solid ${border}`;
    imgs.style.width=`${width}px`;
    imgs.style.height=`${height}px`;
    imgs.style.borderRadius=radius;
    imgs.style.padding=paddingimg;
    imgs.style.backgroundColor=backgcolor;
  
   
   

    

}