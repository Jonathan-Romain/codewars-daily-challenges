// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"






function remove (string) {
    // split string method splits the string parameter by element into an array
    // filter array method iterates through the array and filters out all elements not eqaul to the '!'
    // join string method joins the elements and converts to a string
    // concat string method concatenates the new string with an '!' at the end
    return string.split('').filter(a=>a !== '!').join('').concat('!');
  }
  console.log(remove('Hi!!!!!!!!'))