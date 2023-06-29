// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){
    //variable takes in an input.
    //reduce method is used to iterate over the input array.
    //acc represents the first value of the array and cur represents the second value.
    //values will be mulitplied by each other until the iteration is complete.
   let multiply = x.reduce((acc, cur) => acc * cur); 
   return multiply;
  }
  console.log(grow([4, 1, 1, 1, 4, 2, 5, 8, 2, 3]))


  function grow(x){
    //variable is create to store the initial value.
    let res = 1;
    //for loop is used to iterate over the length of the array as long as i is less than the length of the array.
    for(let i = 0; i < x.length; i++){
      // res is multiplied by the value of the array at its initial index.
      // it iterates over the remaining values multiplying until it is complete.
      res = res * x[i]
    }
    return res;
  }
  console.log(grow([4, 1, 1, 1, 4, 2, 5, 8, 2, 3]))