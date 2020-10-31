let arrOne = [10, 20, 10, 30, 40]

//indexof 
console.log(arrOne.indexOf(10))

//lastIndexof
console.log(arrOne.lastIndexOf(10))

//concat
let arrTwo = [50, 60]
console.log(arrOne.concat(arrTwo))

//join
console.log(arrOne.join("!"))

//pop
console.log(arrOne.pop())

//push 
arrOne.push(60)
console.log(arrOne)

//Reversing an array
console.log(arrOne.reverse())

//Shift an array
console.log(arrOne.shift())

//Unshift an array
console.log(arrOne.unshift(60))

//sort
console.log("sorting", arrOne.sort())

//valueof 
console.info("value of")
console.log(arrOne.valueOf())

//slice 
console.log(arrOne.slice(0))

//splice
arrOne.splice(1, 2)
console.log(arrOne)

//toString
console.log(arrOne.toString())