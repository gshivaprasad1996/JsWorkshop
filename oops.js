class User {
    job = ''
    constructor(name, yearOfBorn){
        this.name = name
        this.yearOfBorn = yearOfBorn
    }

    get age(){
        return this.calculateAge()
    }

    calculateAge(){
        return  2020 - this.yearOfBorn
    }

    static getJob(work){
        this.job = work
        return `I am a ${this.job}`        
    }
}

let obj = new User("Shiva Prasad", 1998)

console.log(User.getJob('developer'))

/*
class Employee extends User{
   constructor(name, yearOfBorn, job){
        super(name, yearOfBorn)    
   }
}

let obj = new Employee("south", 1996, 'developer')

console.log(obj.age)

*/