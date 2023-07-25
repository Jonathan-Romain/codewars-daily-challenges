// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.



function distinct(a) {
    // variable to store an array
    let count = [];
    // forEach method iterates over each element in the array
    a.forEach(el =>{
      // conditional used the includes array method.
      if(!count.includes(el))
      // if element is not includes in the array. push to count
        count.push(el)
    })
    return count
  }
  console.log(distinct([1,2,5,3,3,3,9]))