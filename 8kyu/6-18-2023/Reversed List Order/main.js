// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
    // inside the function the reverse method is called on the input of list.
    // this modifies the original list rather than creating a new reversed list
    list = list.reverse();
    
    return list;
  }
  console.log(reverseList([1, 2, 3, 4]))