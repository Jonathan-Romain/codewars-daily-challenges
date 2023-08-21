// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]




function evenNumbers(array, number) {
    //filter array by it's even numbers
    let filtered = array.filter(a => a % 2 ==0); 
    console.log(filtered)
    // the parameter number will be the length of the returned even array
    // the slice array method return the value of the -number value at the end of the array
    return filtered.slice(-number)
  }
  console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 6], 3))