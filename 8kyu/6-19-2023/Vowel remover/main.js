// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {
    //variable to store array of strings aeiou
    //variable to store the string values as a result
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    // for loop to iterate over the string input.
    for(let i = 0; i < string.length; i++){
      //if vowels does not include string[i]
      if(!vowels.includes(string[i])){
        // string[i] characters will be appended to result
        result += string[i];
      }
    }
    return result;
  }
  console.log(shortcut('hello'))