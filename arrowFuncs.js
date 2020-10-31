"use strict"
//single line arrow function
let getName = name => name.toUpperCase()
console.log(getName("shiva"))

//Arrow function syntax
let add = (x, y) => {
    return x + y
}
console.log(add(10, 10))

//Arrow functions to access outer this.
this.username = "shiva"
let login = ()=>{
    console.log(this.username)
}
login()

/**
 * In regular function syntax we cant access the 
 * this from outside.
 */
 //Arrow functions doesn't have the arguments object
 let funcArgs = ()=>{
     console.log(arguments)
 }
 //funcArgs(0,1,3)

 //You can do with spread operator.
 let funcArgs2 = (...args)=>{
    console.log(args)
 }

 funcArgs2(0,2,4)