'use strict';

const user = {
    name: 'shiva',
    age: 23,
    job: 'develop',
    display: function () {
        return `Name is ${this.name} age is ${this.age} and job is ${this.job}`;
    },
};

//console.log(user.display())

function returnThis() {
    /**
     * in non strict mode it refers to global object in node
     * and window object in browser
     * In strict mode it refers to undefined
     */
    return this.name;
}

//console.log(returnThis.bind(user)())

let person = {
    name: 'south',
};

//In arrow function this referes to gloabl this
let foo = () => {
    return this;
};
console.log(foo());
