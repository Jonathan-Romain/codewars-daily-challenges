// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.



function roundToNext5(n){
  //check input n if it is divisible by 5
  if(n % 5 === 0){
    //if it is divisible by 5. return the same number.
    return (Math.floor(n / 5)) * 5;
  } else {
    //divide it by 5, take the floor value and multiply it by 5 and add 5.
    return (Math.floor(n / 5)) * 5 + 5;
  }
}
console.log(roundToNext5(2))

const roundToNext5 = n => Math.ceil(n / 5) * 5;
// use Math.ceil and divide the input by 5 to get a decimal. Take the ceil value and multiply by 5
console.log(roundToNext5(22))