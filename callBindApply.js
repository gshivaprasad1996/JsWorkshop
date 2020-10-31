//Call example:
let obj = {name: 'Shiva Prasad'}
let greeting = function(age, job){
    console.log(`Welcome ${this.name}, age of ${age} job is ${job}`)
}

greeting.call(obj, 23, "Web Developer")

//Apply example:
let person = {name: 'shiva'}
let greetingApply = function(age, job){
    console.log(this.name)
    console.log(age)
    console.log(job)
}
let ageAndJob = [23, 'job']
greetingApply.apply(person, ageAndJob)


//Bind example:
let user = {name: 'South Joovin'}
let message = function(age, job){
   console.log(`${this.name}  ${age}  ${job}`)
}
let display = message.bind(user)

display(23, 'developer')