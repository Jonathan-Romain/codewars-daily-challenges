// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]




function arrayDiff(a, b) {
  // Temporary array, containing all values from a, which are not contained in b
  let tempArray = [];
  // for loop over a
  for(let i = 0; i < a.length; i++){
    // variable b does not contain a
    let bContainsValueA = false;
    // for loop over b
    for(let j = 0; j < b.length; j++){
      // if any value in a is tha same as the current value for b. bContainsValueA is true
      if(a[i] === b[j]) bContainsValueA = true;
    }
    // Now only if bContainsAValue is still false, meaning it does not contain the a value, we push this value into our temporary array
    if(!bContainsValueA)
      tempArray.push(a[i])
  }
  return tempArray;
}
console.log(arrayDiff([1,2,2,2,3],[2]))


function arrayDiff(a,b){
    // Filter entire a array, only keep the value if b does not contain that value
    const result = a.filter(val => !b.includes(val))
    return result;
  }
  console.log(arrayDiff([1,2,2,2,3],[2]))