// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"



function remove (string) {
    // checks if the last index is equal to the string '!'
    // if so. String prototypey slice method is used to return string index 0 through 1 less than the last element.
    // if false. return the string.
    return string[string.length -1] === '!'? string.slice(0, string.length -1) : string;
  }
  console.log(remove("Hi! Hi!"))