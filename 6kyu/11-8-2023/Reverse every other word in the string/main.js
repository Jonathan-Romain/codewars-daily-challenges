// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.






function reverse(str){
    // for cases where string includes spaces at the beginning and end. 
    // use the trim string method to remove empty spaces
    // convert string into and array separating substring by a space
    // loop through the array and check for indexes that are odd. 
    // if true. use spread syntax to expand. 
    // use the reverse array method to reverse the order then join each element as a string
    // of false return the even element
    // join the elements by each space and return string
    str = str.trim()
    return str.split(' ').map((e,i)=> i % 2 === 1 ? [...e].reverse().join('') : e).join(' ')
  }
  
  