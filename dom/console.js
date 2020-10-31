let error = false
console.assert(error, 'You have an error')

for (i = 0; i < 10; i++) {
  console.count()
}
console.clear()
console.error("you made a mistake!!")

console.error(["orange","banana","mango"])
console.error({name:'shiva',age:23})

console.clear()

console.log("Hello world")
console.groupCollapsed("collapsed")
console.log("hello again, this time inside a group!")
console.groupEnd()

console.clear()

console.info("Hello")
console.info({name:'shiva', age: 23})
console.info(['banana', 'orange', 'apple'])

console.clear()

console.log("Hello World!!")
console.log({name:'shiva', age:23})
console.log(['banana','orange','applce'])

console.clear()

console.table(["audi", "volvo", "ford"])
console.table({name: 'shiva', age:23, job: 'developer'})

let users = [
    {name: 'shiva', age: 23},
    {name: 'south', age: 23},
    {name: 'prasad', age: 23},
    {name: 'joovin', age: 23}
]

console.table(users, ["age"])

console.clear()

console.time()
console.timeEnd()

console.clear()

function myFunction(){
    myOtherFunction()
}
function myOtherFunction(){
    console.trace("")
}
myFunction()
console.clear()


console.warn("Warning")