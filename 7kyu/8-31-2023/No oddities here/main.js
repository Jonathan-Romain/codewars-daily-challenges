// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.





function noOdds( values ){
    // look at the elements within the array
    // filter out all of the are values that are even
  return values.filter(a=> a % 2==0)
  }
  console.log(noOdds([0,1,2,3,4,5,6,7,8,9]))