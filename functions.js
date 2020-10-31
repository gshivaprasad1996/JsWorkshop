
let Person = function(name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job 
}

Person.prototype.lastName = 'Smith'
Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth)
}

let john = new Person('Jhon', 1990, 'teacher')
john.calculateAge()
let jane = new Person('Jane', 1994, 'designer')
jane.calculateAge()
let mark = new Person('Mark', 1948, 'retired')
mark.calculateAge()

console.log(john.lastName)
console.log(jane.lastName)
console.log(mark.lastName)
