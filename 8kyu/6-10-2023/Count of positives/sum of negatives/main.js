// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// function countPositivesSumNegatives(input) {
//     if(input === null) return [];
//     if(input.filter(n => n != 0).length ==0 ) return [];
//     let countOfPositives = 0;
//     let sumOfNegatives = 0;
//     for(const n of input){
//       if(n < 0) sumOfNegatives += n;
//       if(n > 0) countOfPositives += 1;
//     }
//     return [countOfPositives, sumOfNegatives]
//     }
  
//   console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


  function count(input){
    const findPos = input.filter(value => value > 0)
    return findPos;
    console.log(findPos)
  }
  console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))