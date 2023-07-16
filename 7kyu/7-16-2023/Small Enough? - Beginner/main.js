// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


function smallEnough(a, limit){
    //variable array to store the a para input.
    //the map array method is used to check each element in the array against the limit value and return a boolean for each element
    const array = a.map(n => n <= limit)
    // the includes array method is used to check if any elements are false. if so false is returned.
    // if false is not included true is returned because all elements are smaller than limit.
    return array.includes(false)? false : true;
  }
  console.log(smallEnough([80, 1171, 115, 104, 45, 85, 112, 115], 120))