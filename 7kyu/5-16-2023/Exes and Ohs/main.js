// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let lowerCase = str.toLowerCase();
    let exes = lowerCase.split('x').length-1;
    let ohs = lowerCase.split('o').length-1;
    if(exes === ohs){
        return true;
    } else if(exes !== ohs){
        return false;
    } else if(exes === 0 && ohs === 0){
        return true;
    } else {
        return false;
    }
  
  }
  console.log(XO('oxXox'))