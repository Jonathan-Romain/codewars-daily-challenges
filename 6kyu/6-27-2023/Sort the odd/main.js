// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



function sortArray(array) {
    //variable oddNums filters the input by nonzero values with the modulo operator. Any nonzero value in JavaScript is consider truthy. So it checks it the numbers are odd.
    //next it sorts the oddNums variable in ascending order
      const oddNums = array.filter(element => element % 2 ).sort((a,b) => a - b);
    //the result variable maps over the original array. The callback function element checks if the element is odd. oddNums.shift() is called, which removes and returns the first element from the oddNums array. If it is even then it returns without modification. 
      const result = array.map(element => element % 2? oddNums.shift() : element);
      
      return result;
      
    }
    console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))