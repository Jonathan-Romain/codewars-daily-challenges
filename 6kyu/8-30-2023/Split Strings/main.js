// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']






function solution(str){
    let it = [];
    str = str.split('');
    
    if(str.length % 2 === 0){
      str
    } else {
      str.push('_');
    }
    
    for(let i = 0; i < str.length; i+=2){
      it.push(str[i].concat(str[i+1]));
    }
    return it;
  }
  console.log(solution('abcdef'))






  function solution(str){
    // initialize the variable 'it' an an empty array
    let it = [];
    // use the split string method to split the string by each element
    str = str.split('');
    // conditional checks if the length of the array is even or odd
    // if true: str array is not modified
    // if false: _ underscore is pushed to the end of the array
    if(str.length % 2 === 0){
      str;
    } else {
      str.push('_');
    }
    // for loop is used to iterate through the length of the array by 2
    for(let i = 0; i < str.length; i+=2){
      // the str index is concatentated with the element next to it and pushed to the empty array until iteration is complete.
      it.push(str[i].concat(str[i+1]));
    }
    return it;
  }
  console.log(solution('abcdef'))