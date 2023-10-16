// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.






function divCon(x){
    // separate the array by numbers and string
    // calculate a total for each
    // find the difference
    
    const num = x.filter(e => typeof e === 'number').reduce((n1,n2)=> n1 + n2, 0)
  
    const str = x.filter(e => typeof e === 'string').reduce((n1,n2)=> +n1 + +n2, 0)
    
    return num - str;
  }