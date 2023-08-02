// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!




function solve(s){
    //two variables to store the count of lower and uppercase values
    let upCount = 0;
    let loCount = 0;
    //for of loop that iterates through the elements
    for(let letter of s){
      // conditional if lowercase values is equal to the letter
      if(letter.toLowerCase() == letter){
        // loCount will increase by 1
        loCount++
      } else {
        // if not upCount will increase by 1
        upCount++
      }
    }
    // ternary operator is used to for if loCount is greater than or equal to upCount
    // true: lowerCase the string
    // false: upperCase the string
    return loCount >= upCount ? s.toLowerCase() : s.toUpperCase()
  }
  console.log(solve('codE'))