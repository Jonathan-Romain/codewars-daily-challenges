// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".


// function isPalindrome(x) {
//   // take the parameter x and lowercase the input. 
//   x = x.toLowerCase();
//   // variable palindrome will be assigned the new value of x
//   // the array split method will split each element into an array
//   // the array reverse method will reverse each element in the array
//   // the array join method creates a new string by concatenating all the elements in the array.
//   const palindrome = x.split('').reverse().join('')
  
//   if( x === palindrome){
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome('racecar'))

const isPalindrome = x => {
    x = x.toLowerCase();
    const palindrome = x.split('').reverse().join('');
    return x === palindrome ? true : false;
  }