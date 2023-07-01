// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


function between(a, b) {
    //variable that stores an empty array
    let result = [];
    //for loop input a is assigned to the initialization i. Loop continues as long as i is less than or equal to b.
    for(let i = a; i <= b; i++){
      //inside the loop the code ues the push method to add value i to the empty array. 
      result.push(i)
    }
    return result;
  }
  console.log(between(-2, 9))