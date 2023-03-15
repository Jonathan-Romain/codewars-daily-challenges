// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)



function hero(bullets, dragons){
    //Get Coding!
      let shots = bullets / dragons
      // if number of bullets is 2 times the number of dragons true
      if (shots >= 2){
        return true
      // if not then false
      } else {
        return false
      }  
    }