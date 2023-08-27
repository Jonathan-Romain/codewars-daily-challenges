// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string





function reverseLetter(str) {
    //variable to initialize all letters of the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    // variable to store all elements a part of the alphabet
    const answer = [];
    
    //for loop to iterate through the str parameter
    for(let i = 0; i < str.length; i++){
      
      //conditional statement to check if elements in alphabet are included in the str parameter
      if(alphabet.includes(str[i])){
        
        // if elements present in the str are equal to alphabet. each element will be pushed to the answer array variable
        answer.push(str[i])
      }
    }
    
    // answer element is returned as an array.
    // the reverse array method is used to reverse the array.
    // the join array method creates a new string and concatenates all the elements in the array.
    return answer.reverse().join('')
  }
  console.log(reverseLetter('happy?'))