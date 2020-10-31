/**
 * 
 *     Recursion is a machanism that calls a function
 *     itselft until it doesn't
 *     A recursive function always has a condition that stops
 *     the function from calling itself. 
 */

let add = (number)=>{
    if(number <= 0){
        //Breaks the recursion
        return 10
    }else{
        //Calling the same function 
        return number + add(number - 1)
    }
}

//Returns 6
console.log(add(3))


/*

    3 + add(3-1)  ===> 3
    3 + 2 + add(2-1) ===> 5
    3 + 2 + 1 + add(1-1) ===> 6
    once the function argument is 0 is stops recursion
    and returns the value 

*/