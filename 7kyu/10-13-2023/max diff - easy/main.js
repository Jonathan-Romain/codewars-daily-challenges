// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!







function maxDiff(list) {
    // length of list is less than or equal to 1. return 0
    // else find the difference of max and min values
    
    let res = Math.max(...list) - Math.min(...list)
    
    return list.length <= 1 ? 0 : res;
  };