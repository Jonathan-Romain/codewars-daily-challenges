// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.









function removeRotten(bagOfFruits){
  // loop through the array checking each element
  // the array is does not contain elements. return empty array
  // array elements that are modified will be lowercase
  
  let res = [];
  
  if(bagOfFruits){
    for(let i = 0; i < bagOfFruits.length; i++){
      let fruit = bagOfFruits[i];
      if(fruit.slice(0,6) === 'rotten'){
        res.push(fruit.slice(6).toLowerCase())
      } else {
        res.push(fruit)
      }
    }
  }
  return res
}


const removeRotten = bagOfFruits => 
  bagOfFruits ? bagOfFruits.map(e=> e.slice(0,6) === 'rotten' ? e.slice(6).toLowerCase() : e) : [];


  const removeRotten = bagOfFruits => bagOfFruits ? bagOfFruits.map(e=> e.replace('rotten', '').toLowerCase()) : []