// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"







// function spacify(str) {
//   // the arugment is a string 
//   // convert the string into an array and separate each element by a space
//   // once array elements have been separate convert the array back to a string
  
//   return [...str].join(' ')
// }

const spacify = str => str.split('').join(' ')