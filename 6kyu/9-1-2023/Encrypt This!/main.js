// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.








var encryptThis = function(text) {
    // the split string method converts the string into an array separating each by a space
    // use the map array function to iterate over a each element in the array. word will be the callback function
    return text.split(' ').map((word) => {
      // initializing firstChar and charCodeAt(0) will give the ASCII value of each element in the array at the 0th index
          const firstChar = word.charCodeAt(0);
        // conditional if element in array length is greater than 2
        // firstChar concatenated. the last and second element are swaped and the elements between are sliced
          if (word.length > 2) {
            return (
              firstChar +
              word[word.length - 1] +
              word.slice(2, -1) +
              word[1]
            );
          } else if (word.length === 2) {
            return firstChar + word[1];
          } else {
            return firstChar.toString();
          }
        })
        .join(' ')
  
  };
  console.log(encryptThis("A wise old owl lived in an oak"))
  