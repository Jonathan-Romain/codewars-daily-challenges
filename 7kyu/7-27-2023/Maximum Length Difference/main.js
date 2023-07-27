// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string




function mxdiflg(a1, a2) {
    // result will store the maximum length difference found between the strings from two arrays
    let result = 0,
        // lengthA stores the length of array a1
      lengthA = a1.length,
        // lengthB stores the length of array a2
      lengthB = a2.length
    // conditional statement that checks if either array is empty and returns -1
    if(lengthA === 0 || lengthB === 0){
      return -1
    }
    // a nested for loop to iterate over each string and compare all possible combinations of strings
    for(let i = 0; i < lengthA; i++){
      for(let j = 0; j < lengthB; j++){
        //for each pair of strings it calculates the length of both strings and stores them in length1 and length2
        let length1 = a1[i].length,
            length2 = a2[j].length
        //it then calculates the absolute difference in lengths between the two strings
        // This condition checks if the difference between the length of the string from array a1 (length1) and the length of the string from array a2 (length2) is greater than the current value of the result variable. If this condition is true, it means that the current pair of strings has a greater length difference than any previously encountered pairs.
        if(result < length1 - length2){
        // If the above condition is true, the result variable is updated with the new difference (length1 - length2). This ensures that the result variable always stores the maximum difference in lengths found so far during the iteration.
          result = length1 - length2
          // If the previous condition is false, this condition is checked. It is used to handle cases where the length difference in the other direction (length2 - length1) is greater than the current value of result.
        } else if(result < length2 - length1){
          // If this second condition is true, it means that the length difference in the other direction is greater than the current value of result. In this case, the result variable is updated with the new difference (length2 - length1), ensuring that it still holds the maximum difference found so far.
          result = length2 - length1
        }
      }
    }
    return result;
  }
  console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))