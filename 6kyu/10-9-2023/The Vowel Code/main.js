// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.







function encode(string) {
    // check string for vowels
    // string must become an array. 
    // loop through the array checking each element for vowel if so change the string
    // join the elements together then return result
    
    let vow = ['a','e','i','o','u']
    
    string = [...string]
    const res = string.map(e => vow.includes(e) ? e = vow.indexOf(e) + 1 : e).join('')
    return res
    
  }
  
  function decode(string) {
    let vowels = ['a','e','i','o','u']
    let vow = ['1','2','3','4','5']
    
    string = [...string]
    const res = string.map(e => vow.includes(e) ? e = vowels[vow.indexOf(e)] : e).join('')
    return res;
  }