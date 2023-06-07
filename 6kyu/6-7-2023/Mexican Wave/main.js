// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


function wave(str){
    let empty = [];
    
    if([...str] === 0){
      return [];
    }
    
    for(let i = 0; i < str.length; i++){
      let copy = str.split('');
  //     console.log(copy)// test returns number of arrays equal to the value of the length of give string. strings are split in each arrry
      if(copy[i] === ' '){
        continue;
      } // if string is equal to value and type of ' ' empty space skip to the next string.
      copy[i] = copy[i].toUpperCase('');//iterates through each index and uppercases index 0 of array 1, then index 1 of array 2, etc.
  //     console.log(copy[i]);
      empty.push(copy.join(''));//pushes the joined strings to the empty array
  //     console.log(empty);
    }
    
    return empty;
    
    
  }
  console.log(wave('hello'))
  
  