/**
 * 
 * The purpose of asyn/await is to simplify the syntax necessary
 * to consume promise-based APIs. the behavior of async/await is similar
 * to combining generator and promises
 * 
 */

let getUserData = ()=>{
    return new Promise((resolve, reject)=>{
        if(false){
            setTimeout(function(){
                resolve("User profile loaded...")
            },1000) 
        }else{
            reject("Error connecting database...")
        }  
    })
}

let getPosts = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("Posts loaded..")
        },1000)            
    })
}

let getComments = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve("Comments loaded..")
        },1000)            
    })
}

let myNetwork = async ()=>{
    try{
        let profile = await getUserData()
        console.log(profile)
    }catch(e){
        console.log("Error user data loading")
    }
 
    let posts = await getPosts()
    console.log(posts)
    let comments = await getComments()
    console.log(comments)
}

myNetwork()

