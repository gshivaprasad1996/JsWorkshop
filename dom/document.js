//Find the active element on the page
let activeElement = document.activeElement.tagName
console.log(activeElement)

//Adding event listner for button
let button = document.getElementById('btn')
button.addEventListener('click',function(){
    console.log("Button Clicked. Event listner added")
})

//Finding anchor tags in document
let anchors = document.anchors
console.log(anchors)

//base uri of the document
let baseUri = document.baseURI
console.log(baseUri)

//body of the document
let body = document.body
console.log(body)

console.clear()

//Open the output stream and write something and close the stream
document.open()
document.write("<h1>Hello World</h1>")
document.close()

//get the cookies of the documents
let cookie = document.cookie
console.log(cookie)

//get the charset of the document
let charset = document.characterSet
console.log(charset)

//Creating attributes and setting them to first anchor tag
let attr = document.createAttribute('href')
attr.value = "#"
//setting attribute using setAttributeNode
anchors[0].setAttributeNode(attr)
//setting attribute using setAttribute("attribute name", "value")
anchors[1].setAttribute("href", "#")

//Creating comment and adding to document
let comment = document.createComment("my custom comment")
document.body.appendChild(comment)

//creating document fragment
let fragment = document.createDocumentFragment()
fragment.appendChild(anchors[2])
fragment.childNodes[0].childNodes[0].nodeValue = "Custom Link"
fragment.childNodes[0].setAttribute("href", "#")
document.getElementsByTagName('div')[0].appendChild(fragment)

//Creating element
let newButton = document.createElement('button')
newButton.innerHTML = "Click Me"
document.getElementsByTagName('div')[0].appendChild(newButton)

//Creating custom events 
let event = document.createEvent('Event')
let elem = document.getElementsByTagName('div')[0]
//defining the event name
event.initEvent('dump', true, true)
//Adding event listner
elem.addEventListener('dump',function(){
    console.log("The build event triggered!!!")
})
//Firing event
elem.dispatchEvent(event)

//Creating text node
let textNode = document.createTextNode("Hello Welcome to Manipulation!!")
elem.appendChild(textNode)

//Get the documents window object
let win = document.defaultView
console.log(win.innerHeight)
console.log(win.innerWidth)

console.clear()

//Make the document editable
document.designMode = "on"

//Get the doc type of document
let docName = document.doctype
console.log(docName.name)

//Returns the document element from the document
let docElem = document.documentElement
console.log(docElem.nodeName)

//Returns the uri of the document
let docUri = document.documentURI
console.log(docUri)

//Returns the domain of the document
let domain = document.domain
console.log(domain)

//Returns the embeds of the document
let embeds = document.embeds
console.log(embeds)

//Returns the form elements of the document
let forms = document.forms
console.log(forms)

//Get the element that currently in fullscreen mode
let fullScreenElem = document.fullscreenElement
console.log(fullScreenElem)

//Check whether the fullscreen mode enabled or not
let isFullScreenEnabled = document.fullscreenEnabled
console.log(isFullScreenEnabled)

//Getting elements by id
let elmById = document.getElementById('btn')
console.log(elmById)

//Getting elements by classname
let elmByClass = document.getElementsByClassName('link')
console.log(elmByClass)

//Getting elements by element name
let elmByName = document.getElementsByName('html')
console.log(elmByName)

//Getting elements by tag name
let elmByTagName = document.getElementsByTagName('a')
console.log(elmByTagName)

//Finding is document has focus or not
let docFocus = document.hasFocus()
console.log(docFocus)

//Returns the head section of the document
let headOfDoc = document.head
console.log(headOfDoc)

//Returns the img elements from the document
let imgElem = document.images
console.log(imgElem)

console.clear()

//Returns the domImplementation object
let domImpObj = document.implementation
console.log(domImpObj)

//Returns the character encoding of document
let charEncode = document.inputEncoding
console.log(charEncode)

//Returns the date when the current document was modified
let lastModified = document.lastModified
console.log(lastModified)

//Returns the links in the document
let links = document.links
console.log(links)

//Finding elements with css selector
//Returns the first occured element
/**
 * Examples : p, input[type='text'], #id, .class, ul>li>a
 */
let classElm = document.querySelector('ul>li>a')
console.log(classElm)

//Returns the elements with classnames
let classElms = document.querySelectorAll('.link')
console.log(classElms)

//Get the ready state of document
let readyState = document.readyState
console.log(readyState)

//Find the referrer of the current document
let referrer = document.referrer
console.log(referrer)

let button2 = document.getElementById('btn2')
button2.addEventListener('click',function(){
    console.log("button2")
    button.removeEventListener('click',function(){
        console.log("event listner removed")
    })
})

//Returns all the script tags in the document
let scripts = document.scripts
console.log(scripts)

//Returns the title of the document
let title = document.title
console.log(title)

//Return sthe url of the document
let url = document.URL
console.log(url)

//Writes text directly to the document
document.write("Hello World")

//Adds a new line after the statement finished
document.writeln("one")
document.writeln("two")