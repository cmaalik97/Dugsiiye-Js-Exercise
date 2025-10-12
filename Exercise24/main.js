//Default Parameters

function calculateArea(width,height=width){
    let result=width*height;
    console.log(`the result of area: ${result}`)
}
calculateArea(7,8)
calculateArea(4)