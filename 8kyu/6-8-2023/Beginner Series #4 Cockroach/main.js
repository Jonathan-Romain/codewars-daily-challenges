// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


function cockroachSpeed(s) {
    //convert km per hour to cm per second
    let kph = Math.round(s);
    //use Math.round to round to the nearest integer
    let cms =  Math.floor(s*27.7778)
    //use Math.floor to round down to the nearest integer
    return cms;
  }
  console.log(cockroachSpeed(1.47))