// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(iterable){
    //variable to store result in an empty array
    let result = []; 
    // for loop to iterate through input
    for(let i =0; i < iterable.length; i++){
      //variable to store iter
      let currentVal = iterable[i];
      let nextVal= iterable[i + 1];
      
      if(currentVal !== nextVal){
        result.push(currentVal)
      }
    }
    return result;
  }
  console.log(uniqueInOrder('AAAABBBCCDAABBB'))