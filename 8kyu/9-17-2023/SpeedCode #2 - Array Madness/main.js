// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!







function arrayMadness(a, b) {
  let sumA = a.map(a => a**2).reduce((a, b)=> a + b, 0);
  let sumB = b.map(a=> a**3).reduce((a, b) => a + b, 0);
  
  return sumA > sumB
}
console.log(arrayMadness([4,5,6],[1,2,3]))


const arrayMadness = (a, b)=>{
    let sumA = 0;
    let sumB = 0;
    for(let i = 0; i < a.length; i++){
     sumA += a[i]**2;
    }
    for(let j = 0; j < b.length; j++){
      sumB += b[j]**3;
    }
    return sumA > sumB;
  }