// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.



// function findUniq(arr){
//   arr.sort((a,b) => a - b);
  
//   return arr[0] == arr[1]? arr.pop(): arr[0]
// }
// console.log(findUniq([3, 10, 3, 3, 3 , 2]))

// function findUniq(arr) {
//   const uniqueElement = arr.find((element, index, array) => {
//     // Find the first element that occurs only once in the array
//     return array.indexOf(element) === array.lastIndexOf(element);
//   });

//   return uniqueElement;
// }

function findUniq(arr){
    //sort method is used to sort in ascending order
    arr.sort();
    // for loop iterates over each sorted array
    for(let i = 0; i < arr.length; i++){
      //For each element at index i, it checks if it is not equal to the adjacent elements
      //If and element is not equal to its adjacent elements it means it is unique
      if(arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]){
        return arr[i]
      }
    }
    return null;
  }