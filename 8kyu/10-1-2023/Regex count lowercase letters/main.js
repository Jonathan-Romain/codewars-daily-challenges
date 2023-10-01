// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26





function lowercaseCount(str){
    let res = 0;
    //variable to store the string
    //loop through the string
    //identify each string element that is a lowercase letter
    //count each element and return result
    
    for(let i = 0; i < str.length; i++){
      if(str[i] !== str[i].toUpperCase()){
        res += 1
      } else {
        res += 0
      }
    }
    return res
  }





  const lowercaseCount = str => str.split('').filter(ele => ele !== ele.toUpperCase()).length