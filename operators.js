//Artithmetic operators

//Addition (+)
console.log(2 + 2)

//Subtraction (-)
console.log(5 - 10)

//Multiplication
console.log(5 * 5)

//Division 
console.log(35 / 5)

//Reminder (Modules)
console.log(25 % 5)

//Increment operatos
let num = 5
num++ //Post incremnt will give result for the next statement
++num //Pre increment will give result at the time

console.log(num)

//Decrement operator
let num2 = 6
--num
num--
console.log(num2)


/** Logical operators */
console.log(true || false) // true

console.log(true && true) // true 

console.log(true && false) // false 

console.log(!true) // false : negate the value


/**
 * Assignment operators
 */

let a = 5 //Assignement
a += 1 // Addition assignment
console.log(a)

a -= 1  //Subtraction assignment
console.log(a)

a *= 5  //Multiplication assignment
console.log(a)

a /= 5  // Division assignemnt
console.log(a)

a %= 5   //Modules assignemnt
console.log(a)


/**
 * Special Operators in Javascript
 */
let user = {
    name: 'shiva',
    age: 23,
    job: 'developer'
}

//Delete operator : deletes the certain property
delete user.name;
console.log(user)

//typeof operator : returns the typeof object
console.log(typeof user)

//ternary operator
let age = 18
let major = age > 18 ? 'major' : 'minor'
console.log(major)

