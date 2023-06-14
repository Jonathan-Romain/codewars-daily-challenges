// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    // need a variable to store the string value
    let result = '';
    // a for loop is used to iterate from 1 through num
    for(let i = 1; i <= num; i++){
      //variable is used to store i value and sheep is concatenated
      let sheep = i + ' sheep...';
      //the sheep count is appended to the result. The concatenation accumulates the sheep counts as the loop progresses.
      result += sheep;
    }
    return result;
  }
  console.log(countSheep(10))