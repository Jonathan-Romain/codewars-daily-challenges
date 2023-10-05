function rowWeights(array){
    // filter the arrays by even and odd index
    // for each new array get the total value
    // if array length is 1. second value will be zero
    
    const even = array.filter((el, ind)=> ind % 2 == 0).reduce((n1,n2)=> n1 + n2, 0)
    const odd = array.filter((el, ind)=> ind % 2 !== 0).reduce((n1,n2)=> n1 + n2, 0)
    return [even, odd]
  }