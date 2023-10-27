// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!














function solve(arr) {
  // there is an array will multiple arrays inside
  // for every subarray check that the elements inside are not duplicates
  // if no duplicates are present find at the length of each subarray
  // multiple each array to find the number of combinations
  
  return arr.map(e => [...new Set(e)].length).reduce((a, b)=> a * b, 1)
};

const solve = arr =>{
    let sum = 1;
    
    for(let i = 0; i < arr.length; i++){
      let arr1 = [...new Set(arr[i])].length
      sum*= arr1
     }
    return sum
  }