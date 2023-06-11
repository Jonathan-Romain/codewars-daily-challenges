// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
    //variable with string a-z
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // lowercase the string input to match alphabet characters
    string = string.toLowerCase();
    //for loop to iterate through the alphabet
    for(let i = 0; i < alphabet.length; i++){
      //indexOf method returns -1 if value is not present in an array.
      //string checks and compares the iterated values of alphabet. 
      if(string.indexOf(alphabet[i]) === -1)
        return false;
    }
    return true;
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog."))