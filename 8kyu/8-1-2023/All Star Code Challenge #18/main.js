// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1




function strCount(str, letter){  
    // variable count is itialized at 0
    let count = 0;
    // for loop to iterate through str input
    for(let i = 0; i <= str.length; i++){
      // conditonal if checks if character at i is eqaul to input letter
      if(str.charAt(i) == letter){
        //if true count increases by 1
        count++
      }
    }
    return count;
  }
  console.log(strCount("Hello", 'o'))