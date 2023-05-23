// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height){
    let input = weight / Math.pow(height, 2);
    if(input <= 18.5){
        return 'Underweight';
      } else if(input <= 25.0){
        return 'Normal';
      } else if(input <= 30.0){
        return 'Overweight';
      } else{
        return 'Obese';
      }
}
console.log(bmi(50,1.5))