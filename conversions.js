/**
 * 3 types of conversion mostly used in javascript
 * 1. String Conversion
 * 2. Numeric Conversion
 * 3. Boolean Conversion
 */

 /* String conversions */

 //number to string conversion
 let numberToString = String(34)
 console.log(`${numberToString} ===>  ${typeof numberToString}`)

 //boolean to String conversion
 let booleanToString = String(true)
 console.log(`${booleanToString} ===>  ${typeof numberToString}`)

 /* Numeric conversions */

 //string to number (works only for valid string numbers)
 let stringToNumber = Number("34")
 console.log(`${stringToNumber} ===>  ${typeof stringToNumber}`)

 //automatic numeric conversion
 let multiplyTwoNumbers = "5" * "5"
 console.log(`${multiplyTwoNumbers}  ===> ${typeof multiplyTwoNumbers}`)
 /**
  * This doesn't work for addition.
  * If you try to add two string numbers it will try concatinates
  * instead of adding
  */

  //non-number numeric conversions returns :NaN:
  let nonNumberConversion = Number("not a number")
  //But the type will be a number
  console.log(`${nonNumberConversion} ===> ${typeof nonNumberConversion}`)

  let undefinedNumericConversion = Number(undefined)
  console.log(`${undefinedNumericConversion} ===> ${typeof undefinedNumericConversion}`)

  let nullNumericConversion = Number(null)
  console.log(`${nullNumericConversion} ===> ${typeof nullNumericConversion}`)

  let trueNumericConversion = Number(true)
  console.log(`${trueNumericConversion} ===> ${typeof trueNumericConversion}`)
  console.log(Number("  "))// returns 0 and white spaces are removed
  /**
   * undefined ====> NaN
   * null      ====> 0
   * true      ====> 1
   * false     ====> 0
   */


   /* Boolean Conversions */

   console.log(Boolean(undefined)) //false
   console.log(Boolean("0"))  //true

   /**
    * 
    * 0, null, undefined, NaN, ""  ====> false
    * any other =====> true
    */