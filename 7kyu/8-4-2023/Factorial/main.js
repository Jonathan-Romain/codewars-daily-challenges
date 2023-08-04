// Your task is to write function factorial.



function factorial(n){
    // initialize the variable sum as 1
    let sum = 1;
    // for loop will iterate i by 1 until it reaches n
    for(let i = 1; i <= n; i++){
      // sum will be assigned the value sum * i until the iteration completes
      sum = sum * i
    }
    return sum;
  }
  console.log(factorial(4))