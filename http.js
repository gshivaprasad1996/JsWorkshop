let request = new XMLHttpRequest()
//Setting cross-origin requests
request.withCredentials = false

request.open('GET',"https://jsonplaceholder.typicode.com/posts/1")

request.onload = function(){
    console.log(request.status)
    //console.log(request.response)
    /**
     * Server response properties
     * status
     * statusText
     * response
     */

     console.log(request.response)    
    
}

request.onreadystatechange = function(){
    console.log(request.readyState)
}

request.onprogress = function(event){
    console.log(`data loaded ${event.loaded}`)
    console.log(`total data ${event.total}`)
}

request.onerror = function(){
    console.log("Network error")
}
request.timeout = 10000
/**
 * Response type 
 * ""
 * text
 * arrayBuffer
 * blob
 * document
 * json
 */

//Setting http headers
request.setRequestHeader('Content-Type', 'application/json')

request.responseType = "json"


//Getting response headers
console.log(request.getResponseHeader('Content-Type'))
console.log(request.getAllResponseHeaders())
request.send()


//Aborting the request
//request.abort()

