
//Passing array of arguments to functions with out apply
let paramsFunction = (x, y, z)=>{
    console.log(x, y, z)
}

let args = [0,1,2,3]
paramsFunction(...args)

//Using rest parameters 
let paramsFunctionUsingRest = (x, y, z, ...rest)=>{
    console.log(x, y, z)
    console.log(rest)
}
paramsFunctionUsingRest(...args)


//Combining arrays pre, post and at any given position
let first = [0, 1]
let second = [2, 3]
//Adds second array to the first at the beginning
first.push(...second)
//Adds first array to the second at the end
second.unshift(...first)
console.log(first)
console.log(second)

//Adding first and second arrays at the 2nd and 3rd index
let third = [10, 9, ...first, ...second]
console.log(third)


//copying arrays.
let original = [0,1]
let copy = [...original]

console.log(original)
console.log(copy)

original.push(3)
console.log(original)

copy.unshift(10)
console.log(copy)

//Converting arguments into array
let marks = (...list)=>{
   console.log(list)
}

marks(40, 50, 60)


//Using with math functions
let allNumbers = [10, 30, 50, 60]
//Finding minimum value from a give list along with spread operator
console.log(Math.min(...allNumbers))
//Finding maximum value from a give list along with spread operator
console.log(Math.max(...allNumbers))