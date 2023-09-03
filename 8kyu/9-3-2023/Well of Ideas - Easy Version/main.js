// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.






function well(x){
    // initialize the variable counter as 0
    let counter = 0;
    // for loop to iterate through the array
    for(let i = 0; i <= x.length; i++){
      // if the element in the array is equal to the string good. increase count by 1
      if(x[i] === 'good')
        counter += 1;
    }
    // conditional statements for each case.
    if(counter == 0){
      return 'Fail!'
    } else if ( counter === 1 || counter === 2){
      return 'Publish!'
    } else {
      return 'I smell a series!'
    }
  }
  console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good']))