let button = document.getElementsByTagName('button')[0]

//get the value of the attribute
console.log(button.attributes.getNamedItem('onclick').value)
//get the name of the attribute
console.log(button.attributes.item(1).nodeName)
//get the length of the attributes of an element
console.log(button.attributes.length)
//get the name of the attribute of an element [read-only]
console.log(button.attributes[0].name)

//remove the attribute from the element
console.log(button.attributes.removeNamedItem('class'))
let classAttr = document.createAttribute('class')
classAttr.value = 'funClass'
button.attributes.setNamedItem(classAttr)

console.log(button.attributes[0].specified)

console.log(button.attributes[0].value)