// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications



const minValue = values => {
    // first line creates a new array called dups using the spread operator and the Set object.
    //The Set objec is a built in javascript object that allows you to store dups values.
    //by passing the values array to the Set constructor, duplicate values are automactically remvoved.The spread opeator then converts the Set back into an array.
    // the sort method is called on the array to sort the callback function in ascending order
    let dups = [...new Set(values)].sort((a, b) => a - b)
    // the join() method concatenates the elements into a single string.
    // the unary plus operator coerces the string into a numeric value.
    return +dups.join('')
  }
  console.log(minValue([4, 8, 1, 4]))