// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]




var capitals = function (word) {
    //initialize result as an empty array
    let result = []
    // use the string split method to the split strings by individual elements
      word = word.split('')
    // use the for loop to iterate through the array of elements
    for(let i = 0; i < word.length; i++){
      // conditional if array index is equal to the array index uppercase
      if(word[i] == word[i].toUpperCase()){
        // push index of uppercase element to result
       result.push(i)
      }
    }
    return result;
  };
  console.log(capitals('CoDEwarS'))