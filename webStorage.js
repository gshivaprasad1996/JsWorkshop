//setting localstorage item
localStorage.setItem("username", "gshivaprasad.1996@gmail.com")

//Getting localstorage item
let username = localStorage.getItem("username")
console.log(username)

//getting length of localstorage
console.log(localStorage.length)

//getting key of localstorage
console.log(localStorage.key(0))

//removing item from locastorage
localStorage.removeItem("username")

//clearing localstorage
localStorage.clear()



//setting sessionStorage item
sessionStorage.setItem("password", "gshivaprasad.1996")

//getting sessionStorage item
console.log(sessionStorage.getItem("password"))

//getting key of sessionStorage
console.log(sessionStorage.key(0))

//removing item from sessionStorage
sessionStorage.removeItem("password")

//clearing sessionStorage
sessionStorage.clear()

