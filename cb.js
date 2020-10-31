/**
 * 
 * A callback function is a function passed into another function 
 * as an argument,which is then invoked inside the outer function 
 * 
 */

 let doHomeWork = (subject, next)=>{
     console.log(`Do your ${subject} Homework First!!!`)
     next()
 }

 let watchMatch = ()=>{
    console.log('Go and watch Cricket match...')
 }

doHomeWork('Javascript',watchMatch)

