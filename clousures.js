/**
 * An inner function has acccess to it's outer function 
 * variables and parameters event if it is returned
 */

//Exaple 1:
let init = ()=>{
    let name = "shiva"
    let age = 23
    let printName=()=>{
        console.log(name)
        console.log(age)
    }
    return printName
}

let person = init()
console.dir(person)

function makeAdder(x){
    return function(y){
        return x + y
    }
}

let add5 = makeAdder(5)
let add10 = makeAdder(10)

console.log(add5(2))
console.log(add10(2))


//Example 2:
let counter = (()=>{
    let privateCounter = 0
    let changeBy = (val)=>{
        privateCounter += val
    }

    return {
        increment: ()=>{
            changeBy(1)
        },
        decrement: ()=>{
            changeBy(-1)
        },
        value: ()=>{
            return privateCounter
        }
    }
})()

console.dir(counter.value())
counter.increment()
counter.increment()
console.log(counter.value())
counter.decrement()
console.log(counter.value())


