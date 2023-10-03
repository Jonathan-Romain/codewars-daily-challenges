// In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.

// Example:

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]





function getLargerNumbers(a, b) {
    // compare arrays
    // compare each array index a against b index
    // the larger number will be push to the empty array result
    
    let res = [];
    
    for(let arr in a){
      if(a[arr] > b[arr]){
        res.push(a[arr])
      } else {
        res.push(b[arr])
      }
    }
    return res;
  }