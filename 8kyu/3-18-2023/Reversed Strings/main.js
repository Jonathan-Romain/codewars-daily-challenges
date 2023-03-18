// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let splitString = str.split('');
    let reverseString = splitString.reverse();
    let joinString = reverseString.join('');
    return joinString;
  }
  console.log(solution('apple'))