// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// function check(a,x){
//     if(a.includes(x)){
//         return true;
//     } else{
//         return false;
//     }
// }

// const checks = (a, x) => a.includes(x)? true: false;

function expandedForm(num) {
    let strNum = String(num); // Convert the number to a string
    let result = [];
    
    for (let i = 0; i < strNum.length; i++) {
        let digit = parseInt(strNum[i])
    }
    //   let digit = parseInt(strNum[i]); // Get the digit at the current position
    //   let expandedDigit = digit * Math.pow(10, strNum.length - i - 1); // Calculate the expanded form of the digit
      
    //   if (expandedDigit !== 0) { // Exclude trailing zeros
    //     result.push(expandedDigit);
    //   }
    // }
    
    // return result.join(' + '); // Join the expanded digits with " + "
  }
  
  console.log(expandedForm(72));