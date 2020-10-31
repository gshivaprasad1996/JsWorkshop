/**
 * The Document interface represents any webpage which is loaded 
 * in the browser and serves as an entry point into the web pages
 * content which is called dom tree.
 */

 document.querySelector('section').setAttribute('class','my-style')

 //Returns all the anchors tags in the page [:read=only]
console.log(document.anchors)
//Returns body of the page
console.log(document.body)
//Return the character set being used by the document[:read=only]
console.log(document.characterSet)
//Returns the document type [:read=only]
console.log(document.doctype)
//returns the element that is direct child of document[:read-only]
console.log(document.documentElement)
//retruns the document uri[:read-only]
console.log(document.documentURI)
//returns the list of embedded elements with in the current document[:read-only]
console.log(document.embeds)
//returns the fontfaceset interface of current document
console.log(document.fonts)
//returns the list of the form elements with in the current document[:read-only]
console.log(document.forms)
//returns the head element of the current element[:read-only]
console.log(document.head)
//returns the boolean value if the page is considered hidden or not[:read-only]
console.log(document.hidden)
//returns the images in the current document[:read-only]
console.log(document.images)
//returns the list of hyperlinks in the document[:read-only]
console.log(document.links)

//returns the list of plugins of avialble plugins
console.log(document.plugins)

//[read-only]
console.log(document.preferredStyleSheets)
//[read-only]
console.log(document.scripts)
//[read-only]
console.log(document.styleSheets)

//returns the visibility state of document[read-only]
console.log(document.visibilityState)

let parentNode = document.querySelector('body')
//returns the child elements count[ro]
console.log(parentNode.childElementCount)
//returns the children elements of parent[ro]
console.log(parentNode.children)
//returns the first element child[ro]
console.log(parentNode.firstElementChild)
//returns the last element child[po]
console.log(parentNode.lastElementChild)

/*** 
 * Externsion 
 * For HTML document
 */

 console.log(document.cookie)
 console.log(document.defaultView)
 console.log(document.designMode)
 console.log(document.dir)
 console.log(document.domain)
 console.log(document.lastModified)
 console.log(document.location)
 console.log(document.readyState)
 console.log(document.referrer)
 console.log(document.title)
 console.log(document.URL)
 