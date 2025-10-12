//Spread Operator

const arr1=[1,2,3]
const arr2=[...arr1,4,5,6]
console.log(arr2)

//Rest Operator


function multiply(...numbers){
   return numbers.reduce((total,num)=> total * num,1)
    
}
console.log(multiply(5,5,5))