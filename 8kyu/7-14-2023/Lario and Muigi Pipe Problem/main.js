// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8



function pipeFix(numbers){
    // sort numbers from smallest to largest
    numbers = numbers.sort((a, b)=> a - b)
    // variable low will store the value of the index at 0
    let low = numbers[0]
    // variable high will store the value of the last index of an array
    let high = numbers[numbers.length -1]
    // result is assigned the value of an empty array. it is initialized to store the sequence of numbers low to high. 
    let result = []
    // for loop iterates from low to high inclusive and go through each number in the sequence.
    for(let i = low; i <= high; i++){
      result.push(i)
    }
    return result;
  }
  console.log(pipeFix([1,2,3,-1,5,6,8,9]))