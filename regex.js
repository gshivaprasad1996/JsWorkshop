/**
 * Regular expression is a sequence of characters that form an expression
 * which is used to search and replace the string.
 */

let msg = 'Helllo World!!!'
let pattern = /world/gi

console.log(msg.match(pattern))

let newMsg = msg.replace(pattern, "Dudes")
console.log(newMsg)