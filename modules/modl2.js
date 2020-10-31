
class Person{
    constructor(name, city){
        this.name = name
        this.city = city
    }
    getName(){
        return this.name
    }

    getCity(){
        return this.city
    }
}

export {Person}

export {module1} from './module1.js'
export {module2} from './module2.js'
export {module3} from './module3.js'
