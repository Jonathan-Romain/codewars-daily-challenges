// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str){
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of str){
        if(vowels.includes(char)){
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(getCount(''))

const getCount = str => {
    let counter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < str.length; i++){
      for(let j = 0; j < vowels.length; j++){
        if(str[i] === vowels[j]){
          counter ++;
        }
      }
    }
    return counter;
  };