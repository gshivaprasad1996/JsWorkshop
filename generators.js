"use strict"

function *g1(){
    console.log("hello")
    yield 'yield 1 run...'
    console.log("world")
    yield 'yield 2 run...'
    return "Returned"
}

let g = g1()
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)


for(let val of g){
    console.log(val)
}