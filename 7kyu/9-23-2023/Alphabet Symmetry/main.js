// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!




function solve(arr){  
    // alphabet a - z
    // check for letters upper and lowercase
    // add 1 to the index of each letter
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    
    return arr.map(x=>x.toLowerCase().split('').filter((el, i)=> i == alpha.indexOf(el)).length)
    
  }
  console.log(solve(["abode","ABc","xyzD"]))
  
  // const solve = arr =>{
    
  //   let alpha = "abcdefghijklmnopqrstuvwxyz";
    
  //   let result = [];
    
  //   for(let i = 0; i < arr.length; i++){
  //     let arrays = arr[i].toLowerCase().split('');
  //     let positions = [];
     
  //     for(let j = 0; j < arrays.length; j++){
  //       let letters = arrays[j];
  //       let position = alpha.indexOf(letters);
        
  //       if(position !== -1){
  //         positions.push(position);
  //       }
  //     }
  //     result.push(positions)
  //   }
  //   return result;
  // }
  // console.log(solve(["abode","ABc","xyzD"]))