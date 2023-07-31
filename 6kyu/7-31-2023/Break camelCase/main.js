// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""





function solution(string) {
    // take the string input and use array split method to separate each element
    let s = string.split('')
    // variable uP uses map method to check each element is equal to the element in uppercase
    // ternary operator true will add a ' ' space before each element equal to it uppercase element
    // false and element will remain the same
    const uP = s.map(a=> a == a.toUpperCase() ? ' ' + a : a)
    // join the modified array of characters back into a string
    return uP.join('')
    
  }
  console.log(solution('camelCastingText'))
  
  
  function solution(string){
    let newString = '';
    for(letter of string){
      if(letter == letter.toUpperCase()){
        newString += ' ';
        newString += letter;
      } else {
        newString += letter;
      }
    }
    return newString;
  }