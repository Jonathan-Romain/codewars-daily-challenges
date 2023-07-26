// Write a function that returns the total surface area and volume of a box as an array: [area, volume]




function getSize(width, height, depth){
    let area = (2 * (width * height))+(2 * (width * depth))+(2* (height * depth));
    let volume = width * height * depth; 
    return [area, volume]
  }
  console.log(getSize(4, 2, 6))