// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.




function minMax(arr){
    // array sort method with elements first and last for comparison. This will put the elements into ascending order.
    const sorted = arr.sort((first, last)=> first - last)
    // length method is used to check if eqaul to 1. if so, array min and max value will be the array at index 0.
    // if false. array min value will store value at sorted array index 0 and and max index will be the last index from sorted array. 
    return sorted.length === 1? [sorted[0], sorted[0]]: [sorted[0], sorted[sorted.length -1]]
    }
  console.log(minMax([1, 35, 53, 5, 6, 4, 3]))