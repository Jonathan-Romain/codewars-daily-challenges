// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square


function findNextSquare(sq) {
    //find out it number is a perfect square
    let sqOrNot = Math.sqrt(sq);
    //Math.floor to round down the integer
    let result = Math.floor(sqOrNot);
    //checks if the two variable are equal.
    if(sqOrNot === result){
    //if so, value of result + 1 then power of 2 is returned
      return Math.pow((result + 1), 2);
    // return -1 if not
    } else{
      return -1;
    }
  }
  console.log(findNextSquare(120))