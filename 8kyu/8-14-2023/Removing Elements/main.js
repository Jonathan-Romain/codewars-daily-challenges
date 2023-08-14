// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!




function removeEveryOther(arr){
    // initialize result as empty array
    let result = []
    //for loop iterates through the parameter
    for(let i = 0; i < arr.length; i++){
      // conditional if index is even.
      if(i % 2 === 0){
        // if even the corresponding index will be pushed to the empty array
        result.push(arr[i])
      }
    }
    return result;
  }
  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))