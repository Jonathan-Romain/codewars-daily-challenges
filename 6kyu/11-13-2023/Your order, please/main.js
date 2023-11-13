// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""





function order (words){

// convert the string to an array. each string will be split by an empty space
  // there needs to be an empty array to store the sorted strings 
  // use a nested for loop to check over the array
  // the outer loop 'i' iterates from 1 to the length of the array
  // the inner loop 'j' iterates from 0 to the length of the array
  // inside the inner loop the function checks if the current word (array[j]) contains the current value of 'i'
  // the indexOf methodis used to check if the creent word contains the current value of 'i'
  // if the condition is true (meaning the word contains the current number), the word is pushed into the sortedArray
  // join(' ') the array to convert back to string



    let array = words.split(' ');
    let sortedArray = [];

    for(let i = 1; i <= array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j].indexOf(i) >= 0){
                sortedArray.push(array[j])
            }
        }
    }
    return sortedArray.join(' ')
}