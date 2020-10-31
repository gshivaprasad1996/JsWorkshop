//Foreach 
/**
 * The for each method iterates the
 * array along with item and index
 */
[1,2,3].forEach((item, index)=>{
    console.log(item, index)
})

//map
const three = [1, 2, 3]
/**
 * The map method iterates the array
 * and does something to the item 
 * and return the new element.
 */
const doubled = three.map((item)=>{
    return item * 2
})
console.log(doubled)

//Filter
/**
 * The filter method iterates the array
 * and checks the condition if the condition
 * satisfies and then return the element
 */
 const ints = [1,2,3]
 const evens = ints.filter((item)=>{
     return item % 2 ===0
 })
 console.log(evens)

 //reduce
 const sum = [1,2,3].reduce((result, item)=>{
     console.log(result, item)
     return result + item
 },10)
 console.log(sum)

//some 
const hasNegativeNumbers = [1,2,3,4,-1].some((item)=>{
    return item < 0
})
console.log(hasNegativeNumbers)

//every 
const allPositiveNumbers = [1,2,-3].every((item)=>{
    return item > 0
})
console.log(allPositiveNumbers)

//find
const objects = [{id:'a'},{id:'b'}, {id:'c'}]
const found = objects.find((item)=>{
    return item.id === 'b'
})
console.log(found)

//findIdex
const objects2 = [{id:'a'},{id:'b'}, {id:'c'}]
const foundIndex = objects2.findIndex((item)=>{
    return item.id === 'b'
})
console.log(foundIndex)
