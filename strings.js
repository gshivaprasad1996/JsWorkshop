let message = "Hello World"

//length of a string(number of characters)
console.log(message.length)

//returns the character at given position
console.log(message.charAt(2))

//retuns the charcter code at givenn position
console.log(message.charCodeAt(2))

let greeting = "Hola!!"

//joins two or more strings
console.log(message.concat(greeting).concat("Shiva"))

//returns the character from given charcode
console.log(String.fromCharCode(108))

//returns the index of given charcter in string
console.log(message.indexOf('o'))

//returns the index count from right side of a string
console.log(message.lastIndexOf('o'))

//match the given portion of a string in the current string
console.log(message.match('ll'))

//replace the string
console.log(message.replace("World", "Shiva"))

///searches for the word
console.log(message.search("World"))

//slicing the portion of a string
console.log(message.slice(0, 5))

//split the string with the given charcter
console.log(message.split(""))

//substracting the string
console.log(message.substr(0, 5))

//substracting the string
console.log(message.substring(0, 5))

//to lowercase
console.log(message.toLowerCase())

//to uppercase
console.log(message.toUpperCase())

//find the index of portion of string
console.log(message.indexOf("World"))
//console.clear()

//repeat the current string given number of times and return
let copy = message.repeat(2)
console.log(copy)

//check is the string startwith
console.log(copy.startsWith("Hello"))

//check is the string endswith
console.log(message.endsWith("World"))

//check the given word includes the string
console.log(message.includes("World", 5))

let number = 123

//convert to the string
console.log(number.toString())

//trimming the string
let roughText = " Rough  "
console.log(roughText)
console.log(roughText.trim())