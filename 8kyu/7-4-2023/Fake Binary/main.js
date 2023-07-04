// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    //variables nums to store input into an array then split it by a space.
    let nums = x.split('');
    // variable aboveOrBelow stores return value.
    // map method is used on current element a. + before a is the unary + operator to convert a string to a number.
    // ternary operator is used to check if value is less than 5. if true 0, if false 1
    // once iteration is complete the join method is used to concatenate all the elements into a single string and answer is returned.
    return aboveOrBelow5 = nums.map(a => +a < 5 ? 0 : 1).join('');
  }
  console.log(fakeBin('45385593107843568'))