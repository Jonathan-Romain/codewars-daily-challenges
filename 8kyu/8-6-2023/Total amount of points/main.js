// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4




function points(games) {
    // variable sum to initialize
    let sum = 0;
    // for loop that iterates through parameter
    for(let i = 0; i < games.length; i++){
      // if initialize value at the 0th index of the element is greater than the 2nd index. plus 3
      if(games[i][0] > games[i][2]){
        sum+=3
        // if initialize value at the 0th index of the element is equal to the 2nd index. plus 1
      } else if(games[i][0] == games[i][2]){
        sum+=1
      }
    }
    return sum
  }
  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))