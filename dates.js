//Creating date object with current date and time
let date = new Date()

//Creating date object with custom date and time
/**
 * year, month, day, hour, minutes, seconds, milli seconds
 * you can omit any one of these except year and month
 */
let date1 = new Date(2017, 20, 10)

//Declare date as a string
let date2 = new Date("2018-20-10")

//Getting day of month
console.log(date.getDate())

//Getting day of week
console.log(date.getDay())

//Getting year as a four digit number
console.log(date.getFullYear())

//Get the hours of current day
console.log(date.getHours())

//Get the minutes of current hour
console.log(date.getMinutes())

//Get the seconds of minute
console.log(date.getSeconds())

//Get the milliseconds of a second
console.log(date.getMilliseconds())

//Get the month of year
console.log(date.getMonth())

//Get the time since jan1, 1970
console.log(date.getTime())

//returns the day of month in utc format
/**
 * also available 
 * getUTCDay, getUTCMonth, getUTCYear, getUTCSeconds ..etc
 */
console.log(date.getUTCDate())

//Parse a string representation of date into milliseconds
console.log(Date.parse(date))



//Setting date
date.setDate(20)
date.setFullYear(2019)
date.setHours(10)
date.setMilliseconds(480)
date.setMinutes(20)
date.setSeconds(10)
date.setTime(1590379085000)
//date.setUTCDate()
console.log(date.getDate())