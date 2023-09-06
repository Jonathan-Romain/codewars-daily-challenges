// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.




function findLongest(array){
    // initialize a variable as a string whose length will be less than 1
    let longest = '';
    // for loop to iterate through array
    for(let i = 0; i < array.length; i++){
      // initialize iterated array values as string values
      let str = array[i].toString();
      //conditional checks for the first string with the most digits
      if(longest.length < str.length){
        // first string with the most digits will be assigned to value of longest
        longest = str;
      }
    }
    return +longest
  }
  console.log(findLongest([1 ,9000, 9000, 8, 800, 10000]))