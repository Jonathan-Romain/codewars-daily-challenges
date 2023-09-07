// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).











function findOdd(A) {
// 
  let counter = {}
  A.forEach(ele =>{
    if(counter[ele]) {
      counter[ele]++
    } else {
      counter[ele] = 1;
    }
  })
  // use the 
  for(let value in counter){
    if(counter[value] % 2 !== 0){
      return parseInt(value)
    }
  }
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))



const findOdd = A => {
    // set up an obj to check the frequncy of each element
    let counter = {};
    // loop through every element in the array
    for (let i = 0; i < A.length; i++){
      // if element appears more than once increment count by 1
      if(counter[A[i]]){
        counter[A[i]] += 1;
      } else {
        // if element appears set count to 1
        counter[A[i]] = 1
      }
    }
    // for in loop will iterate through the keys of an object
    for (let values in counter){
      // if value of the key is has a remainder ( the values is odd)
      if(counter[values] % 2 == 1){
        // the key will be returned as the answers
        // values will be returned as 'string'. the parseInt function is use to turn the string into a number
        return parseInt(values)
      }
    }
  }
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))