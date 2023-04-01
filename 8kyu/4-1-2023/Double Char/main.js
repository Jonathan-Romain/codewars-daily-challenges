// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    // Your code here
    // declare variable and assign it an empty string
    let wordForString = '';
    //use a for loop to iterate through the parameter
    for(let i= 0; i <str.length; i++){
      //reassign the variable and add the parameters two times
      wordForString += str[i] + str[i];
    }
    //return the variable
    return wordForString;
  }