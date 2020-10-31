/*
let personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth)
    }
}

let john = Object.create(personProto)
john.name = 'Jhon'
john.yearOfBirth = 1990
john.job = 'teacher'

let jane = Object.create(personProto, {
    name: { value: 'jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
})
*/

let user = {
    name : 'shiva'
}
user.age = 23
user['job'] = 'developer'

console.log(Object.keys('user'))
console.log(Object.getOwnPropertyNames("user"))