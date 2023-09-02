// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):




function reverseWords(str){
    // split string method is use to split the string by each empty space and convert the string into an array
    // reverse array method will reverse the order of each element in the new array
    // the join array method creates a new string by concatenating all the elements in the array
    return str.split(' ').reverse().join(' ')
  }
  console.log(reverseWords('hello world!'))