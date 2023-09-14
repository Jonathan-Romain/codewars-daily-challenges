// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'



// Solution 1
function switcheroo(x){
    let result = [];
    x = x.split('');
    
    for(let i = 0; i < x.length; i++){
      if(x[i] === 'a'){
        result.push('b');
      } else if (x[i] === 'b'){
        result.push('a');
      } else {
        result.push(x[i]);
      }
    }
    return result.join('')
  }
  console.log(switcheroo('aaabcccbaaa'))



// Solution 2
function switcheroo(x){
    let str = '';
    
    for (let letter in x){
      if(x[letter] === 'a'){
        str += 'b';
      } else if(x[letter] === 'b'){
        str += 'a';
      } else {
        str += x[letter];
      }
    }
    return str;
  }  
  console.log(switcheroo('aaabcccbaaa'))  
