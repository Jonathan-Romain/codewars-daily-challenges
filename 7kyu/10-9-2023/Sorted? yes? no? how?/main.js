// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.





function isSortedAndHow(array) {
    // compare the array parameter
    // create a shallow copy of array in ascending order
    // create a shallow copy of array in decending order
  
   
    const asc = [...array].sort((e1, e2) => e1 - e2)
  
    const des = [...array].sort((e1,e2) => e2 - e1)
  
    
  if (JSON.stringify(array) === JSON.stringify(asc)) {
      return 'yes, ascending';
    } else if (JSON.stringify(array) === JSON.stringify(des)) {
      return 'yes, descending';
    } else {
      return 'no';
    }
    
  }




  const isSortedAndHow = a => {
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
           s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
  }