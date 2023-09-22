// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)




function sumCubes(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
      let ress = Math.pow(i,3)
      sum += ress;
    }
    return sum;
  }
  console.log(sumCubes(5))
  
  // initial value sum is 0
  
  // loop from 1 to value of less than or eqaul n by an iteration of 1
  
  // get the cubed value of each iteration
  
  // add sum = sum + i until iteration is complete