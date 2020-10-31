/**
 * The default value of javascript variable is 
 * undefined
 *  
 */
//parameters
function greet(firstname, lastname="Prasad"){
    console.log(`Hola!. ${firstname}, ${lastname}`)
}

//Arguments
greet("Shiva")
greet("South","Joovin")

let display = function(){
    return "Hello World"
}

//Returns the "Hello World" String
let msg = display() 
console.log(msg)