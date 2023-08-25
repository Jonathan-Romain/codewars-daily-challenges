// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.




function combat(health, damage) {
    let curHealth = health - damage;
    
    if(curHealth >= 0 ){
      return curHealth;
    } else {
      return 0 
    }
  }
  console.log(combat(100, 103))
  