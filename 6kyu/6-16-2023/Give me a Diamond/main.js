// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"




function diamond(n){
    //n cannot be zero, negative, or an even number
    if(n % 2 === 0 || n <= 0){
      return null;
    }
    //diam variable is initialized as an empty string and will store the final pattern
    let diam = '';
    //middle variable is calculated as the floor division of n by 2. It represents the index of the middle row in the diamond pattern.
    let middle = Math.floor(n / 2);
    // for loop generates the top half of the diamond pattern starting from the top row and going towards the middle row.
    for(let i = 0; i <= middle; i++){
      // ' '.repeat(middle - i): Repeats the space character ' ' a number of times equal to the difference between middle and i. It adds leading spaces to align the asterisks properly
      // '*'.repeat(i * 2 + 1): Repeats the asterisk character '*' a number of times equal to i * 2 + 1. It determines the number of asterisks in the current row.
      // '\n': Appends a newline character to the end of each row.
      let row = ' '.repeat(middle - i) + '*'.repeat(i * 2 + 1) + '\n';
      // row is added to the diam string.
      diam += row;
    }
    // for loop generates the bottom half fo the diamond pattern starting from the row just below the middle row and going towards the bottom row.
    for(let i = middle - 1; i >= 0; i--){
      let row = ' '.repeat(middle - i) + '*'.repeat(i * 2 + 1) + '\n';
      diam += row;
    }
    return diam;
  }
  console.log(diamond(7))
  
  