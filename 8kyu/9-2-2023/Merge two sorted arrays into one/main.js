// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!








function mergeArrays(arr1, arr2) {
    // initialize the variable result as an empty array
    let result = [];
    // sortCat variable concatenates the 2 arrays and sorts then in ascending order.
    const sortCat = arr1.concat(arr2).sort((a,b)=>a - b);
    // for loop iterates over the variable sortCat checking for repeated elements
    for(let i = 0; i < sortCat.length; i++){
      // if the element is not the same as the next element. push it to the empty array
      if(sortCat[i] !== sortCat[i+1])
        result.push(sortCat[i]);
    }
    return result;
  }
  console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))