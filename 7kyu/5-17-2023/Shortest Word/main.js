// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let short = s.split(' ');
    let lengthOfWords = short.map( shorts => {
      return shorts.length;
    })
    return Math.min(...lengthOfWords)
  }