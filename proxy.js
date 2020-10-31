let handler = {
    //A handler method which contains traps.
    get: (obj, prop)=>{
        return prop in obj ? obj[prop] : "Sorry Not found...."
    },
    set: (obj, prop, value)=>{
       return prop === 'name' ? obj[prop] = value.toUpperCase() : obj[prop] = value
    }
}

let user = new Proxy({}, handler)
user.name = "shiva"
user.age = 23
user.job = "developer"

console.log(user.name)
console.log(user.welcome)


//Forwarding all operations that are applied to proxy.
/*
const target = {}
const user = new Proxy(target, {})
user.name = "South"

console.log(target)

*/