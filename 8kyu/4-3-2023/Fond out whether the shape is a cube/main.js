// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer




// var cubeChecker = function(volume, side){
//   if(Math.pow(side, 3) === volume && side > 0){
//     return true;
//   } 
//   return false;
// };

const cubeChecker = (volume, side) => side **3 === volume && side > 0;

// var cubeChecker = function(volume, side){
//   return Math.pow(side, 3) === volume && side > 0;
// };


var cubeCheckers = function(volume, side){
    let equalSides = Math.pow(side, 3);
    if (equalSides !== volume){
      return false;
    } else if (volume <= 0 || side <= 0){
      return false;
    }
    return true;
  };
  
  // var cubeChecker = function(volume, side){
  //   if (side<=0 || volume<=0){
  //     return false;
  //   }else if(Math.pow(side,3)!==volume){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // };