// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

// function vowel2index(str) {
//   //need a variable that can be used to check for the vowels a,e,i,o,u
//   //initial string needs to be converted to an array
//   //each element in the array will be checked to see if it is a vowel
//   //if the element is a vowel, element will be replaced by it's index value +1

//   let vow = ['a','e','i','o','u'];

//   let res = '';

//   for(let i = 0; i < str.length; i++){
//     if(vow.includes(str[i])){
//       res += i + 1;
//     } else{
//       res += str[i];
//     }
//   }
//   return res

// }

function vowel2index(str) {
  if (str === "") return "";

  let vow = ["a", "e", "i", "o", "u"];

  return str.replace(/[aeiou]/gi, (match, index) => index + 1);
}
