// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];







function first(arr, n) {
    if(n == null){
      return [arr[0]];
    }
    
    let result = [];
    for(let nums in arr){
      if(nums < n){
        result.push(arr[nums])
      }
    }
    return result;
  }
  