// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).




function longestConsec(strarr, k) {
    // variable longest is initialized to an empty string to keep track of the longest concatenated string
    let longest = '';
    // iterate over the array of strings
    // the function enters a loop that iterates over the array of strings. the loop variable 'i' starts from 0 and goes up to 'strarr.length - k'. The purpose of this is to ensure that the loop only goes up to a point where there are at least 'k' elements left in the array to be concatenated.
    for(let i = 0; i <= strarr.length - k; i+=1){
      //inside the loop, a slice of the array is taken using the 'slice' method. This slice includes 'k' elements starting from the current index 'i'. The 'join' method is then used to concatenate these 'k' elements into a single string called 'tempStr'.
      let tempStr = strarr.slice(i, i+k).join('')
      // the 'if' condition checks whether the length of the 'tempStr' is greater than the length of the 'longest' string found so far. If it is, the 'longest' string is updated to the value of 'tempStr'.
      if(tempStr.length > longest.length){
        longest = tempStr
      }
    }
    return k > 0 ? longest : ''
  }
  console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))
  