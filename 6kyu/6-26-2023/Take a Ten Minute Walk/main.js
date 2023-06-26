// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).



function isValidWalk(walk) {
    //variables set to 0 to increment or decrement count
    let ns = 0;
    let ew = 0;
    // check the length of the walk. if not equal to 10 return false
    if(walk.length === 10){
      // if walk length equal to 10. the function iterates over each element using a for loop
      for(let i of walk){
        // inside the loop it checks the value of each element and increments or decrements the count
        if(i == 'n') ns += 1;
        if(i == 's') ns -= 1;
        if(i == 'e') ew += 1;
        if(i == 'w') ew -= 1;
      }
    } else{
      return false;
    }
    //the function checks if the variable counts are 0 and will return true if they are.
    return ns === 0 && ew === 0;
  
  }
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))