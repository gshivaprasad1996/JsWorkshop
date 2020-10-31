/**
 *  Basics of javascript numbers
 */

 let simpleNumber = '23.0';
 
 //converting string to number
console.log(`before converting simple number is a ${typeof simpleNumber}`);
let covertedNumber = parseInt(simpleNumber);
console.log(`after converting simpleNumber is a ${typeof covertedNumber}`);

//printing zeros after decimal point
console.log(15.7.toFixed(4));

//math.round function 
console.log(Math.round(1.6));

//math.ceil function
console.log(Math.ceil(1.2));

//math.floor function
console.log(Math.floor(1.8));

//math.round function
console.log(Math.round(Math.random() * 1000000));

