// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.



const solution = number => {
    //the variable sum stores the running sum of the numbers that meet the condition.
    let sum = 0;
    // a for loop is used to iterate from 1 to number - 1.It starts at 1 because we want to find the sum of numbers less than number.
    for(let i = 1; i < number; i++){
    // Within the loop an if statement checks if the current number 'i' is divisible by 3 or 5.
      if(i % 3 === 0 || i % 5 === 0){
        //if the condition is true, meaning 'i' is divisible by either 3 or 5, the current number i is added to the sume variable using the += operator.
        //The loop continues iterating until 'i' reaches number - 1
        sum += i;
      }
    }
    return sum;
  }
  console.log(solution(23))