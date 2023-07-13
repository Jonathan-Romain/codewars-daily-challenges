// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


function capitalize(s){
    // two variables are created and assigned the value of empty strings.
    let evenResult = '';
    let oddResult = '';
    // the for loop iterates over the characters in the input string s. the loop variable i represents the index of the current character. 
    for(let i = 0; i < s.length; i++){
      // the code checks if i is an even index by using i % 2 === 0
      if(i % 2 === 0){
        // if i is even the code appends the uppercase version of the current character to even results.
        evenResult += s[i].toUpperCase();
        oddResult += s[i].toLowerCase();
      } else {
        //if i is odd then the code follows the opposite logic and appends to the lowercase version.
        evenResult += s[i].toLowerCase();
        oddResult += s[i].toUpperCase();
      }
    }
    //after iterating through all the characters in s the loop ends and the function returns an array [eventResult, oddResult]. This array contains the two strings that represent the capitalized versions of characters at even and odd indexes, respectively.
    return [evenResult, oddResult]
    
  };
  console.log(capitalize('codewars'))