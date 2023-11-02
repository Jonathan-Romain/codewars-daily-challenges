// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)






reverse = function(array) {
    // array arguement is already an array
    // we need an empty arary to store the new value
    // loop through the existing array using the unshift method put the elements into the array starting from the end
    let res = []
    
    for(let i = 0; i < array.length; i++){
      res.unshift(array[i])
    }
    return res
  }