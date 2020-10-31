console.log("events...")
/**
 * On-abort method :
 * The onabort event occurs when the loading 
 * of an audio/video is aborted.
 */
let video = document.getElementsByName('video')
video.onabort = function(){
    console.log("Error in downloading video")
}
document.addEventListener('video', function(){
    console.log("Error fetching video")
})

let body = document.getElementsByTagName('body')[0]
/**
 * The onafterprint event occurs when a 
 * page has started printing, or if the print 
 * dialogue box has been closed.
 */
body.addEventListener('onafterprint',function(){
    console.log("print started")
})

/**
 * animation events
 * 
 */

