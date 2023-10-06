// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

// Examples
// 7 ==> return "Balanced"
// Explanation:
// middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.
// 295591 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 55
// sum of all digits to the left of the middle digit(s) -> 11
// sum of all digits to the right of the middle digit(s) -> 10
// 11 and 10 are not equal, so it's not balanced.
// 959 ==> return "Balanced"
// Explanation:
// middle digit(s): 5
// sum of all digits to the left of the middle digit(s) -> 9
// sum of all digits to the right of the middle digit(s) -> 9
// 9 and 9 are equal, so it's balanced.
// 27102983 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 02
// sum of all digits to the left of the middle digit(s) -> 10
// sum of all digits to the right of the middle digit(s) -> 20
// 10 and 20 are not equal, so it's not balanced.













function balancedNum(number){
    //check the length of number
    //number length is 1 then it is balanced
    //create counter for digits to the left and the right of the middle digit(s)
    //find the sum of left digits and right digits
    //if equal return balanced.
    //else not balanced
    
    
    let left = [];
    let right = [];
    
    let arr = ([...number.toString()])
    
    
    const res = arr.filter((el, ind)=> {
      if(ind+1 < arr.length / 2){
        left.push(el)
      } else if (ind > arr.length / 2){
        right.push(el)
      }
    })
    
    left = left.reduce((n1,n2)=> +n1 + +n2, 0)
    right = right.reduce((n1,n2)=> +n1 + +n2, 0)
    
    return left == right ? 'Balanced' : 'Not Balanced'
  }
  