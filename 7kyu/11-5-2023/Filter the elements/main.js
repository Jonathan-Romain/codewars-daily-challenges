// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.









var filterString = function(value) {
    // use the spread method to separate each element
    // use the unary operator to convert filtered element to a number
    // filter by elements greater than or equal to 0
    // join the filtered elements
    return +[...value].filter(e=> e >= 0).join('')
  }