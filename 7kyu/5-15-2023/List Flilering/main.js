// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
    let list = []; // empty array assigned to a variable
    for(let i = 0; i < l.length; i++){  // for loop iterates through the parameter of l
      if(typeof l[i] !== 'string'){ // Inside the for loop it checks if the current element is not a string using the typeof operator. if the element is not a string, it is pushed into the list array.
        list.push(l[i])
      }
    }
    return list;
  }