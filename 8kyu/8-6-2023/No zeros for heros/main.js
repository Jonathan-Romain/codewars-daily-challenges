// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway




function noBoringZeros(n) {
    //string method to convert parameter into a string. the split array method converts string into an array separating each element
    let arr = String(n).split('');
    //while loop looks at the arr and checks the last index to see if the type and value are equal '0'
    while(arr[arr.length - 1] === '0'){
      // if true, element will be removed with the pop array method.
      arr.pop();
    }
    // unaray plus (+) operator converts array into a number and join array method joins the elements
    return +arr.join('')
  }
  console.log(noBoringZeros(960000))