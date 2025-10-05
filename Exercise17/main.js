//else-if it mean if this condition is not happe use another condition
//but check the comparision operator
let tem=Number(prompt("Enter the temp: "));
if(tem<0){
    console.log("Very Cold")
}
else if (tem >=0 && tem < 15){
    console.log("Cold")
}
else if(tem >= 15 && tem < 25)
{
    console.log("Warm")
}

else{
    console.log("Hot")
}
