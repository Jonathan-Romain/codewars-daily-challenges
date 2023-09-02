// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.




function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
    
}




function isPowerOfTwo(n){
    // if input parameter is 0 or a negative number false is returned
   if(n <= 0) return false
    
    return (n & (n - 1)) === 0
  }
  console.log(isPowerOfTwo(5))




  function isPowerOfTwo(n){
    let i = 0;
    while(2**i < n){i++}
      return (2**i == n) ? true : false;
    }
    