// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!





function solve(arr) {
    // check the array for duplicate elments
    // if there are no duplicates return the array
    // the duplicate element(s) with the lowest index(es) will be removed from the array
    
    let res = []
    
    let lastOccur = {}
    
    for(let i = 0; i < arr.length; i++){
      let element = arr[i]
      lastOccur[element] = i;
    }
     
    for(let i = 0; i < arr.length; i++){
      let element = arr[i]
      if(lastOccur[element] === i){
       res.push(element) 
      }
    }
      return res
    
  }




  function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}