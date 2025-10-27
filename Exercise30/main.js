//callback function
function Operate(a,b,callback){
    return callback(a,b)
}
function add(a,b){
    return a+b
}
function subst(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}

console.log("Addition: ",Operate(3,4,add))
console.log("Subtraction: ",Operate(10,5,subst))
console.log("Multiply: ",Operate(3,4,multiply))
console.log("Division: ",Operate(3,4,divide))