// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


function sumDigits(number) {
    // Math.abs gets the absolute value of numbers negative and positive. it is then converted to a string.
    number = Math.abs(number).toString();
    let sum = 0;
    // for loop iterates character
    for(let i = 0; i < number.length; i++){
    //The parseInt function converts the string representation of a number to an actual integer.
      sum += parseInt(number[i])
    }
    return sum;
  }
  console.log(sumDigits(-32))