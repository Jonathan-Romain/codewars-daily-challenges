// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let count = 0;
    let newArray = [];
    for(let i = 0; i < x.length; i++){
      newArray.push(parseInt(x[i]));
    }
    for(let j = 0; j < newArray.length; j++){
      count = count + newArray[j];
    }
    return count;
  }