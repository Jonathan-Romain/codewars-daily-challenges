// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


var isAnagram = function(test, original) {
    //lowercase both parameters
    test = test.toLowerCase();
    original = original.toLowerCase();
    
    //if lengths are not equal return false
    if(test.length !== original.length){
      return false;
    }
    
    // store inputs into variables then split each string by a space. Sort by UTF-16 code unit values. Join each value then compare
    let str1 = test.split('').sort().join();
    let str2 = original.split('').sort().join();
    
    // if values are strictly equal return true. else false
    if(str1 === str2){
      return true;
    } else {
      return false;
    }
  };
  console.log(isAnagram('loop', 'POOL'))