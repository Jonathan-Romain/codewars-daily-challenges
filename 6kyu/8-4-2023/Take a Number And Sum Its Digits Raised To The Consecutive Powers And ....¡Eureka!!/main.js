// The number 
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89
// =
// 8
// 1
// +
// 9
// 2
// 89=8 
// 1
//  +9 
// 2
 

// The next number in having this property is 
// 135
// 135:

// See this property again: 
// 135
// =
// 1
// 1
// +
// 3
// 2
// +
// 5
// 3
// 135=1 
// 1
//  +3 
// 2
//  +5 
// 3
 

// Task
// We need a function to collect these numbers, that may receive two integers 
// �
// a, 
// �
// b that defines the range 
// [
// �
// ,
// �
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// �
// ,
// �
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!





function sumDigPow(a, b) {
    //initialize an empty array result, which will hold the numbers that meet the condition.
    let result = [];
    // The function enters a for loop that iterates from a to b (inclusive), checking each number in the range.
    for (let i = a; i <= b; i += 1) {
      // For each number i, we convert it to a string using i.toString() and then split the string into an array of individual digits using split(''). We also use .map(Number) to convert each element in the array of digits back to a number. This step is performed to extract the individual digits of the number
      let digits = i.toString().split('').map(Number);
      // We initialize a variable sum to store the sum of the digits raised to consecutive powers.
      let sum = 0;
      // Next, we enter another for loop that iterates through the digits array. For each digit, we calculate its value raised to the power of its index position in the array plus 1 (consecutive powers starting from 1). We then add this value to the sum.
      for (let j = 0; j < digits.length; j++) {
        sum += Math.pow(digits[j], j + 1);
      }
      // After calculating the sum for the current number i, we check if it is equal to i. If i is equal to the sum, it means that the number satisfies the condition, i.e., the sum of its digits raised to consecutive powers equals the number itself.
      if (i === sum) {
        // If the condition is met, we push the number 'i' into the 'result' array.
        result.push(i);
      }
    }
    return result;
  }
  
  console.log(sumDigPow(1, 100));