// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.



function largestPairSum (numbers) {
    // the sort array method to put arrays in ascending order. lastNum is initialized as the value of the last index of the sorted array.
    let lastNum = numbers.sort((a, b)=> a - b)[numbers.length - 1]
    // the sort array method to put arrays in ascending order. secNum is initialized as the value of the second to last index of the sorted array.
    let secNum = numbers.sort((a, b)=> a - b)[numbers.length - 2]
    // the two initialized variables are then add together to return the answer.
    return lastNum + secNum
  }
  console.log(largestPairSum([99, 2, 2, 23, 19]))