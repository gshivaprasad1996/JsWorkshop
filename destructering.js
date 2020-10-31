/**
 * Destructering assignment is a special syntax that unpack the 
 * Arrays or Objects into a bunch of variables.
 */

let person = {name:'shiva', age:23, job: 'develper'}

//Taking name and age from the person object
let {name, age} = person
console.log(name) 
console.log(age)

/**
*  Taking name, age, and job and assigning them to
*  userName, userAge, and userJob.
*/

let {name: userName, age: userAge, job: userJob } = person
console.log(userName)
console.log(userAge)
console.log(userJob) 

let {name: firstName, ...rest} = person
console.log(firstName)
console.log(rest)


let numbers = [10,20,30,40]
let [x,y] = numbers

console.log(x, y)

let [a,b, ...restNumbers] = numbers
console.log(a, b)

console.log(restNumbers)

//Destructerig function parameters by object along with spread operator
let display = ({name, age, ...restData})=>{
    console.log(name)
    console.log(age)
    //console.log(job)
    console.log(restData)
}

display(person)

//Destrering function parameters by array of arguments along with spread operator
let studentMarks  = ([maths, physics, chemistry, ...remaining])=>{
    console.log(maths)
    console.log(physics)
    console.log(chemistry)
    console.log(remaining)
}

studentMarks(numbers)