// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



function descendingOrder(n){
    // take parameter n and use string method to turn number into a string
    // use the split string method to split each element by an empty space into an array
    // use sort array method to sort in descending order
    // use join array method to join each element
    n = String(n).split('').sort((a, b) => b - a).join('');
    // use the parseInt function to parse the string and return an integer
    return parseInt(n)
  }
  console.log(descendingOrder(123456789))