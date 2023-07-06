// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)



function persistence(num) {
    //variable count to store the number of times the multiplicative runs until it is a single digit
      let count = 0;
      // while loop is used and the condition checks if the length of the number is not equal to 1.
      // loop continues as long as num is not a single digit number. 
      while(num.toString().length !== 1){
        //toString converts number to a string
        // split('') splits the sting into an array of individual characters. 
        //reduce method is applied to the array of digits. it multiplies each element by the next element
        //The initial value of a is the first element of the array, and b takes the subsquent values from the array. This reduces the array to a single value
        num = num.toString().split('').reduce((a,b) => a * b);
        //the count variable is incremented by 1 to keep track of the number of iterations.
        count++
      }
      return count;
      
    }
    console.log(persistence(39))