// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    //lowercase the initial string
    s = s.toLowerCase();
    //empty array to push results to
    let arr = [];
    //for loop to iterate through string
    for(let i = 0; i < s.length; i++){
      //variable to store iterated elements in uppercase
      let upCase = s[i].toUpperCase()
      //nested for loop to iterate
      for(let j = 0; j < i; j++){
        // for each iteration s[i] appends lowercase version to upCase
        upCase += s[i]
      }
      //nested loop completes and substrings are pushed into the empty array
      arr.push(upCase)
    }
    //iterations for outer loop are done. function joins the elements into a single string separated by -
    return arr.join('-');
  }
  console.log(accum('abcd'))