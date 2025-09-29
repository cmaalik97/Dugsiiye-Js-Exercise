// for of loop is short and easy way 
// only you creat variable and excute that variable
// mostyle for of loop use in arrays
//ex for(let x of student) and use that x

// for in loop also is a short way of loop
// for in loop mostyle uses in objects
// ex:  for(const key in students) then u you excute
// the students of key like:  students[key]

//now we solve the problem
const people=[
    {name:"Alice",age:25,city:"Mogadishu"},
    {name:"Bob",age:30,city:"Baladwene"},
    {name:"Charlie",age:35,city:"Ceerigabo"},
];

for(let x of people){
    for(const key in x){
          console.log(key + ":" + x[key])

    }
    console.log("------")
      
    
}

