let name = "Shiva Prasad"
let age = 23
let job = "Web Developer"

let display = function(){
    return `${name} => ${job}`
}


/**
 * Default export:
 * export default display. You can import the display as default.
 * 
 * exporting multiple:
 * export {name, age, job}
 * 
 * exporting alias names
 * 
 *       export {
 *          name as personName,
 *           age as personAge,
 *           job as personJob,
 *          display
 *       }
 * 
 * 
 * 
 */

export {
    name as personName,
    age as personAge,
    job as personJob,
    display
}
