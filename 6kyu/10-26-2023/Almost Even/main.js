// We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!

// Example:
// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Inputs
// The input to your function will always be valid for this kata.







// /**
//  * Returns a [parts]-length array of equal or nearly equal
//  * integers that add up to [num].
//  */
// var splitInteger = function(num, parts) {
//   // num is the total
//   // parts is what nums will be divided by
//   // sum of the divided value
  
//   let sum = num / parts
//   let res = []
  
//   for(let i = 0; i < parts; i++){
//     res.push(Math.floor(sum))
//   }
//   let reduce = res.reduce((a,b)=> a + b, 0)
//   if(reduce === num) return res;
  
  
//   let total = num - reduce
//   let res2 = []
//   for(let i = 0; i < total; i++){
//     res2.push(total[i] = 1)
//   }
//   const final = res2.reduce((e,i)=> )
//   console.log(final)
// }




var splitInteger = function(num, parts) {
    // num is the total
    // parts is how many parts to divide the number into
    // Sum of the divided values
    
    let sum = Math.floor(num / parts); // Calculate the initial quotient
    let remainder = num % parts; // Calculate the remainder
  
    let res = Array(parts).fill(sum); // Initialize the result array with 'sum'
  
    // Distribute the remainder, if any
    for (let i = 0; i < remainder; i++) {
      res[i]++;
    }
  
    return res;
  }
  