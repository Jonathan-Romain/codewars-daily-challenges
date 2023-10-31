// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.







function meeting(s) {
  // capitalize the strings of each element
  // split the string by each semicolon
  // look through the array splitting each element by colon
  // reverse the elements
 
  let upper = s.toUpperCase()
  
  upper = upper.split(';')
  
  for(let i = 0; i < upper.length; i++){
    upper[i] = upper[i].split(':').reverse()
  }
  let res = upper.sort().reduce((e, name)=> e+= `(${name[0]}, ${name[1]})`,"" )
  
  return res
}


const meeting = s => {
    return s = s.toUpperCase()
                .split(';')
                .map(e=> e.split(':').reverse())
                .sort()
                .reduce((e, name)=> e+= `(${name[0]}, ${name[1]})`,"")
  }