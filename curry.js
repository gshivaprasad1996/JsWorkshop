/**
 * 
 * Currying is a technique of evaluating function with multiple arguments, 
 * into sequence of functions with single argument
 * 
 * Currying doesn't return a function it transforms it
 */


 let curryFunc = (f)=>{
    return (a)=>{
        return (b)=>{
            return (c)=>{
                //executing add function 
                return f(a,b,c)
            }
        }
    }
 }


 let add = (a,b,c)=>{
     return a + b + c
 }

 //Passing function add to the curryFuncc
 let addedFunc = curryFunc(add)

 console.log(addedFunc(10)(5)(10))


