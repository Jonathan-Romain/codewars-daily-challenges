// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!







// function duplicateEncode(word){
//   // ignore the case of the string by lowercasing the string
//   // convert this string to an array separating each element
//   // compare elements to show repeating elements or elements that appear once
  
//   word = word.toLowerCase()
//   return word.split('').map(e=> word.indexOf(e) === word.lastIndexOf(e) ? '(' : ')').join('')
// }


const duplicateEncode = word => {
    let res = [];
    
    let letters = word.toLowerCase().split('')
    
    
    for(let i = 0; i < letters.length; i++){
      if(letters.indexOf(letters[i]) !== letters.lastIndexOf(letters[i])){
        res.push(')')
      } else {
        res.push('(')
      }
    }
    return res.join('')
  }
  