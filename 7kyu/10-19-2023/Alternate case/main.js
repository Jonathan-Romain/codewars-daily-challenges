// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD





function alternateCase(s) {
//   // loop through the string checking each element
//   // is string is Uppercase it will become lowercase and vise versa
  
  let res = '';
  
  for(let i = 0; i < s.length; i++){
    if(s[i] == s[i].toUpperCase()){
      res += s[i].toLowerCase()
    } else {
      res += s[i].toUpperCase()
    }
  }
  return res
}


const alternateCase = s => {
  let res = [];
  
  for(let i = 0; i < s.length; i++){
     if(s[i] == s[i].toUpperCase()){
      res.push(s[i].toLowerCase())
    } else {
      res.push(s[i].toUpperCase())
    }
  }
  return res.join('')
}


const alternateCase = s => [...s].map(e=> e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('')