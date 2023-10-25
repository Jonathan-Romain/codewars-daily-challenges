// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!














// function repeats(arr){
//   // all nums no funny biz
//   // return sum of singles
//   // filter arr -> singles - indexOf(n) === lastIndexOf(n)
//   // sum the singles - reduce
//   return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c) => a + c, 0)
// };

function repeats(arr){
    let res = []
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
        res.push(arr[i])
      }
    }
    for(let i = 0; i < res.length; i++){
      sum+= res[i]
    }
    return sum
  }