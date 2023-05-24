// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F



function abbrevName(name){
   let upperCase = name.toUpperCase();
   let splitIntoArray = upperCase.split(' ');
   let mapInitalsAndJoin = splitIntoArray.map(el => el[0]).join('.');
   return mapInitalsAndJoin;
}
console.log(abbrevName('jonathan Romain'))