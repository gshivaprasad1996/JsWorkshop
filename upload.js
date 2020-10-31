let upload = function(file){
    console.log(file)
    
    let request = new XMLHttpRequest()
    /**
     * XHR upload events
     * loadstart
     * progress
     * abort
     * error
     * load
     * timeout
     * loadend
     */
    request.upload.onloadstart = function(){
        console.info("uploading started")
    }

    request.upload.onprogress = function(event){
        console.info(`Event Loaded ${event.loaded} of total ${event.total}`)
    }

    request.upload.onload = function(){
        console.info("Upload finished successfully!!")
    }

    request.upload.onerror = function(){
        console.info("Error occurred")
    }

    request.upload.onabort = function(){
        console.log("Request aborted")
    }

    request.open("POST", "https://jsonplaceholder.typicode.com/photos")
    request.send(file)

}
