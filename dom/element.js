/**
 * The element object represents an html element such
 * as p, div, input, form, etc..
 */

 //access key
 let inputElem = document.getElementsByTagName('input')[0]
 inputElem.accessKey = "S"

 //Adding event listener
 let buttonElm = document.getElementsByName('name')[0]
 buttonElm.addEventListener('click', function(){
     console.log("button clicked!!")
 })

//Adding child to the element
let list = document.getElementById('olList')
let item = document.createElement('li')
let text = document.createTextNode("one")
item.appendChild(text)
list.appendChild(item)

//Finding attributes of element
let attrsOfBtn = buttonElm.attributes
console.log(attrsOfBtn)

//blur() : to remove foucs on element
inputElem.blur()

//Finding child elemtns count
let listOfItems = list.childElementCount
console.log(listOfItems)

//Finding list of child nodes
let childNodes = document.body.childNodes
console.log(childNodes)

//Returning collection of child elements
console.log(list.children)

//Getting list of class tags
let divTag = document.getElementById('divTag')
console.log(divTag.classList)
//Adding class three
divTag.classList.add("four")
console.log(divTag.classList)

//Adding class to the element
buttonElm.className = "customButton"
console.log(buttonElm.className)

//Adding click() method to element
buttonElm.click()

//Get the height and width of an element with padding
console.log(divTag.clientHeight, divTag.clientWidth)

//Get the left and top border width of an element
console.log(divTag.clientTop, divTag.clientLeft)

//Cloning elements
let cloneElm = list.lastChild.cloneNode(true)
let ulList = document.getElementById('ulList')
ulList.appendChild(cloneElm)

//checking whether node contains an element or not
let para = document.getElementsByTagName('p')[0]
console.log(divTag.contains(para))

//making content editable of document
divTag.contentEditable = true

//change the text direction right to left
divTag.dir = "rtl"

//method for opening document in fullscree
function openFs(){
    console.log("opening fullscreen")
    //get the html document
    document.documentElement.requestFullscreen()
}

//method for closing fullscreen
function closeFs(){
    console.log("closing fullscreen")
    document.exitFullscreen()
}

//get the first child of a document
console.log(list.firstElementChild.innerText)


//Get the value of the specified attribute name
console.log(divTag.getAttribute('class'))
console.log(divTag.getAttribute('id'))

//Get the value node of the specified attribute node
console.log(divTag.getAttributeNode('class').value)

//getBoundingClientRect()
console.log(divTag.getBoundingClientRect())

//Gettinig elements by class name
let classElms = document.getElementsByClassName('one')
console.log(classElms)

//Checking whether the element has an attribute or not
let attr = divTag.hasAttribute('id')
console.log(attr)

//Checking whether the element has any attributes or not
let attrs = divTag.hasAttributes()
console.log(attrs)

console.clear()

//checking element has any child nodes
console.log(divTag.hasChildNodes())

//Specifying an id of an element
console.log(divTag.id)
//Setting id
divTag.id = "custom"
console.log(divTag)

//change the html content of element
let p = document.getElementById('para')
console.log(p.innerHTML)
p.innerHTML = '<h2>paragraph</h2>'

//changint the text of an element
divTag.innerText = "sample paragraph"

//inserting adjacent 
/**
 * Adjacent methods
 * "afterbegin"
 * "afterend"
 * "beforebegin"
 * "beforeend"
 */
let coffeeElm = document.getElementById('coffee')
let teaElm = document.getElementById('tea')

teaElm.insertAdjacentElement("afterend", coffeeElm)

//inserting adjacent html
/**
 * "afterbegin"
 * "afterend"
 * "beforebegin"
 * "beforeend"
 */

 teaElm.insertAdjacentHTML("afterend","<h5>Black Coffee</h5>")

 //inserting adjacent text
 /**
  * "afterbegin"
 * "afterend"
 * "beforebegin"
 * "beforeend"
  */

 coffeeElm.insertAdjacentText("afterend","Lemon Tea")

 //Insert before
 let newItem = document.createElement('li')
 let textNode = document.createTextNode("Green Tea")
 newItem.appendChild(textNode)
 olList.insertBefore(newItem, teaElm)

 //is content editable
 console.log(divTag.isContentEditable)


 //isEqualNode
 //Check if two list items in two different lists are equal:
let olListItem = olList.firstElementChild
let ulListItem = ulList.firstElementChild
console.log(olListItem.isEqualNode(ulListItem))

//checks both the nodes are same or not
console.log(olListItem.isSameNode(olListItem))

//get the language code of an element
divTag.lang = "en"
console.log(divTag.lang)

//Finding the last child of an element
console.log(olList.lastChild)

//Finding the last child element of an element
console.log(olList.lastElementChild)

//Finding namespace uri of xhtml document
console.log(document.documentElement.namespaceURI)

//finding next sibling of element
console.log(olListItem.nextSibling)

//Finding next element sibling of element
console.log(olListItem.nextElementSibling)

//Finding node name
console.log(olListItem.nodeName)

//Finding node type
console.log(olListItem.nodeType)

//Finding node value
console.log(olList.firstChild.nodeValue)

//Offset
/**
 * The offsetHeight property returns the viewable height of an element in pixels,
 *  including padding, border and scrollbar, but not the margin.
 */

 console.log(divTag.offsetHeight, divTag.offsetWidth)
 console.log(divTag.offsetLeft, divTag.offsetParent, divTag.offsetTop)

 console.clear()

 console.log(divTag.outerHTML)
 console.log(divTag.outerText)

 console.log(divTag.ownerDocument.nodeType)

 //Parent node
 console.log(divTag.parentNode.nodeName)

 //parent element
 console.log(divTag.parentElement.nodeName)

 //previous sibling
 console.log(olList.lastChild.previousSibling)

 //previous element sibling
 console.log(olList.lastChild.previousElementSibling)

 //query selector
 console.log(document.querySelector('ul#ulList'))

 //query selector all
 console.log(document.querySelectorAll('ul#ulList'))

 //remove
 document.querySelector('ul#ulList').remove()

 //Remove attribute 
 document.getElementById('tea').removeAttribute('id')

 //Remove attribute node
 let removeAttrNode = document.getElementById('coffee')
 let removeAttr = removeAttrNode.getAttributeNode('id')
 removeAttrNode.removeAttributeNode(removeAttr)

 //Remove child
 olList.removeChild(olList.childNodes[0])

 //Replacing a node
 console.log(ulList.childNodes[0])
 let newTextNode = document.createTextNode("My New Text")
 ulList.childNodes[1].replaceChild(newTextNode, ulList.childNodes[1].childNodes[0])

 //scroll properties
 console.log(divTag.scrollHeight, divTag.scrollWidth, divTag.scrollLeft, divTag.scrollTop)

 //scroll into view
 console.log(divTag.scrollIntoView())

 //style property of element
 divTag.style.color = "blue"

 //tab index
 ulList.childNodes[1].tabIndex = "4"

 //tag name
 console.log(divTag.tagName)

 //reading text
 console.log(divTag.textContent)

 //reading title
 console.log(divTag.title)