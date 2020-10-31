//Sets
/*
let myArray = [1,3,4,5]
let mySet = new Set(myArray)

mySet.add(6)
mySet.add({a: 1, b: 2})
mySet.delete(4)
//mySet.clear()
mySet.add(10)

mySet.forEach(function(val){
    console.log(val)
})

*/

//Maps 
/*
let myMap = new Map([['a1','Hello'], ['b2','Hi']])

myMap.set('c3', 'How are you?')
myMap.delete('b2')
console.log(myMap.size)
*/

//Weakset
/*
let carWeakSet = new WeakSet()
let car1 = {
    name: 'Honda',
    model: 'Civic',
}

carWeakSet.add(car1)
let car2 = {
    name: 'Toyoto',
    model: 'Camry',
}

carWeakSet.add(car2)
console.log(carWeakSet) 

*/

//WeakMap

let carWeakMap = new WeakMap()
let key1 = {
    id: 1
}
let car1 = {
    name : 'Honda',
    model: 'Civic'
}
let key2 = {
    id: 2
}
let car2 = {
    name : 'Toyoto',
    model: 'Camry'
}

carWeakMap.set(key1, car1)
carWeakMap.set(key2, car2)
console.log(carWeakMap)
