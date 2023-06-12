// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


function SeriesSum(n){
    //variable to store sum value equal to 0
    let sum = 0;
    //for loop to iterate through the input value
    for(let i = 0; i < n; i++){
      //sum value 0 = 0 + 1/(i*3 + 1)
      sum += 1/(i*3 + 1)
    }
    //return value of sum showing only 2 decimal places
    return sum.toFixed(2);
  }
  console.log(SeriesSum(4))