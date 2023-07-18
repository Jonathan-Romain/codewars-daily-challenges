// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]




multiplicationTable = function(size) {
    //variable table is initialized as an empty to store the array values 
    let table = []
    //for loop to iterate from 1 through the value of size parameter
    for(let i = 1; i <= size; i++){
      // Array() constructor creates an array object
      const numbers = Array(size)
      // the array fill method changes the value of all element to 1
      .fill(1)
      // the array map method will map each element of the array adding the element + index then multiple by i
      .map((el, index)=> (el + index) * i)
      console.log(numbers)
      table.push(numbers)
    }
    return table;
  }
  console.log(multiplicationTable(13))