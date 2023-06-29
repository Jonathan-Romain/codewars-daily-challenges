// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    //conditional if statement with typeof operator. Checks if input is a string and will return an error is true.

    //if false. input is a number and will be multiplied by 50 with 6 added
  if (typeof x == 'string'){
    return 'Error';
  } else {
    return (x * 50) + 6;
  }
}
console.log(problem('k'))

//typeof opeartor is used to find out it input is a string.
//ternary operator checks if statement is true or false. 
const problem = x => typeof x == 'string' ? 'Error' : x * 50 + 6;