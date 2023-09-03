// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.








function stringy(size) {
    // initialize a variable result as an empty array
    let result = [];
    // for loop to iterate from index 1 through the length of the give size
     for(let i = 1; i <= size; i++){
       // if i is an even number push 0 to the empty array
       if(i % 2 == 0){
         result.push(0)
         // if i is an odd number push 1 to the empty array
       } else {
         result.push(1)
       }
     }
    // return the result as a string
    return result.join('')
  }
  console.log(stringy(12))