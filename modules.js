/**
 * Importing default
 * import anyname as from './modl.js
 *
 * Importing multiple
 * import {name, age, job} from './modl.js'
 *
 * Renaming imorts
 * import {
 *      name as personName,
 *      age as personAge
 *      } from './modl.js'
 *
 * Creating a module object
 * import * as Module from './modl.js'
 */

import * as Custom from './modl.js'
//Importing class as a module
import { Person } from './modules/modl2.js'

/*
import {
    module1,
    module2,
    module3
} from './modules/modl2.js'

let obj = new Person("Shiva", "Hyderabad")

console.log(module1)
console.log(module2)
console.log(module3)
*/

if (true) {
  import('./modules/modl2.js').then((module) => {
    console.log(module.module1)
  })
}
