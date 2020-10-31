
function *setUp(){
    yield  new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Process initiated....")
        },2000)
    })
    yield  new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Connecting to server...")
        },1000)
    })
    yield  new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Downloading software")
        },3000)
    })
    yield  new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Installing software ...")
        },3000)
    })
    yield  new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Setup Completed ...")
        },1000)
    })
}

(async()=>{
    let obj = setUp()
    await obj.next().value.then((resp)=> console.log(resp))
    await obj.next().value.then((resp)=> console.log(resp))
    await obj.next().value.then((resp)=> console.log(resp))
    await obj.next().value.then((resp)=> console.log(resp))
    await obj.next().value.then((resp)=> console.log(resp))    
})()
