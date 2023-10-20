// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"




var greet = function(name) {
    // parameter will be a string
    // string value could uppercase or lowercase
    // once string has been checked for it's case element at index 0 must be capitalized
    // all elements after will be lowercase
    // new value of string is achieved return 'Hello name!'
    
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return `Hello ${name}!`
  };