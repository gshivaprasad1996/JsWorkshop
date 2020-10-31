let myWorker = new Worker('worker.js');
myWorker.postMessage("Message Posted to Worker....")
//myWorker.terminate()
myWorker.onmessage = function(e){
    console.log(e.data);    
}