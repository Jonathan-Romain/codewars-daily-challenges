// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].



function flattenAndSort(array) {
    //the array flat method creates a new array with all sub array elements concatenated into it recrusively up to the specified depth.
    //the array sort method will compare element a and b, then sort then in ascending order.
    return array.flat().sort((a, b)=> a - b)
  }  
  console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))