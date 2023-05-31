// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array){
    if(array === [] || array == null){ //if array is equal to value and type of empty array OR array is equal type of value null return 0.
        return 0;
    }
    let total = 0;
    let sort = array.sort((a, b)=> a - b); //will sort numbers from smallest to largest
    let remove = sort.slice(1, -1); // removes the first number and and last number of array with slice method
    for(let i = 0; i < remove.length; i++){
       total += remove[i]; //for loop iterates through remaining elements in the index then adds them together.
    }
    return total;
}
console.log(sumArray([ -6, 20, -1, 10, -12 ]))