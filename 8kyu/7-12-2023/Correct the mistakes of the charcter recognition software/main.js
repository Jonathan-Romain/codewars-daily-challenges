// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.



function correct(string){
	// string is split into an array to work with each character indivdually
  string = string.split('')
  // the for of loop iterates over each char in the string array
  for(let char of string){
    // if char is equal 0.
    if(char === '0'){
      //the indexOf method is used to find the index of the first occurrence of 0 in the string array and it replaced with O
      string[string.indexOf(char)] = 'O';
    } else if(char === '5'){
      string[string.indexOf(char)] = 'S'
    } else if(char === '1'){
      string[string.indexOf(char)] = 'I'
    }
  }
  return string.join('')
}
console.log(correct('L0ND0N'))