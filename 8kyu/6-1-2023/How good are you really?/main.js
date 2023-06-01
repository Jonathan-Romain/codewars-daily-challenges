// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// let scores = [91, 63, 79, 85, 77, 92, 88, 96, 82, 78];

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//     let avg = 0;
//   for(let i = 0; i < classPoints.length; i++){
//     avg += classPoints[i];
//   }
//    let sum =  avg/classPoints.length;
//   if( yourPoints > sum){
//     return true;
//   } else{
//     return false;
//   }
// }
// console.log(betterThanAverage([91, 63, 79, 85, 77, 92, 88, 96, 82, 78], 90))

function betterThanAverage(classPoints, yourPoints) {
    //total classpoints
    const sum = classPoints.reduce((acc, cVal) => acc + cVal, 0);
    //divide by number of classmates to get the average
    let avg = sum / classPoints.length;
    //compare average score to yourpoints if yourpoints > true / else false 
    if(yourPoints > avg){
      return true;
    } else {
      return false;
    }
    
  }