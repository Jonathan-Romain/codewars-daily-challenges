
// Complete the function which converts hex number (given as a string) to a decimal number.



function hexToDec(hexString){
    //The parseInt function is a built-in JavaScript function that converts a string representation of a number to an actual number.
    //The first argument hexString is the string to be converted.
    //The second argument 16 specifies the base of the input string, which is 16 (hexadecimal).
    return parseInt(hexString, 16)
  }
  console.log(hexToDec('a'))