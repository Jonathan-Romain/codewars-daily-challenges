// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"




function sumMul(n,m){
    // if n or m parameter is less than or equal to 0 return 'INVALID'
    if(n <= 0 || m <= 0) return 'INVALID'
    // initialize result as 0 to hold the total between n and m
    let result = 0;
    // for loop to initialize i as value of n.
    // i will be less than m and value of m will not be included in iteration
    // i will iterate by the value of parameter n
    for( let i = n; i < m; i+=n){
      // result value 0 will be added by the initial value of i.
      // result will be added to each value of i until iteration is complete
      result += i;
    }
    return result;
  }
  console.log(sumMul(4, 123))