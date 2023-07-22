// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.


function findMultiples(integer, limit) {
    //a. Array.from: This method creates a new array from an array-like or iterable object. In this case, we want to create an array of multiples, so we use it.
    
    //b. {length: parseInt(limit / integer)}: This is an object passed to Array.from, which specifies the length of the new array we want to create. The length property is set to the result of parseInt(limit / integer), which calculates how many multiples of integer are there within the limit value. For example, if integer is 11 and limit is 54, then parseInt(54 / 11) is 4, so we'll have an array of length 4.
    
    //c. (_, index) => (index + 1) * integer: This is the mapping function used by Array.from to populate the elements of the new array. The first parameter _ is just a placeholder that we don't use, as it represents the value of each element in the newly created array, but we don't need it in this case. The second parameter index represents the index of the current element being created.
      
    //The mapping function takes the index value and calculates the corresponding multiple of integer. Since array indices are zero-based in JavaScript, we add 1 to the index before multiplying it by integer. So, for example, if integer is 11, the mapping function would generate the multiples: 11 * 1 = 11, 11 * 2 = 22, 11 * 3 = 33, 11 * 4 = 44, and so on.
     return Array.from({length: parseInt(limit / integer)}, (_, index)=> (index + 1) * integer)
    }
    console.log(findMultiples(11, 54))




    function findMultiples(integer, limit) {
        // variable result is assigned the value of an empty array
        let result = [];
        //for loop i is initalized the value of integer.
        //i is less than or equal to the limit and will iterate by the value of the integer.
        for(let i = integer; i <= limit; i+= integer){
          //all values will be pushed to the result array.
          result.push(i)
        }
        return result;
      }
      console.log(findMultiples(11, 54))