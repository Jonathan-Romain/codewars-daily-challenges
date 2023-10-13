// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters




function kebabize(str) {
    // loop through the string checking for capitalized letters
    // if index is greater than 0 and capitalized and an '-' before the element
    // lowercase the string
    
    let res = '';
    str = [...str][0].toLowerCase() + str.slice(1)
    str = [...str].filter(e=> !parseInt(e)).filter(e=> e !== '0')
    
    for(let i = 0; i < str.length; i++){
      if(str[i].slice(0) == str[i].toUpperCase()){
        res+='-'+ str[i]
      } else {
        res+= str[i]
      }
    }
    return res.toLowerCase()
  }
  