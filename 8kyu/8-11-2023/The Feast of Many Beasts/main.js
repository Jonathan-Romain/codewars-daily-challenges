// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.



function feast(beast, dish) {
    // initialize b1 as the index of parameter at the 0th index
    let b1 = beast[0]
    // initialized b2 as the index of parameter at the last index
    let b2 = beast[beast.length - 1]
    
    let d1 = dish[0]
  
    let d2 = dish[dish.length -1]
   
    return b1 === d1 && b2 === d2 ? true : false;
  }
  console.log(feast("great blue heron", "garlic naan"))