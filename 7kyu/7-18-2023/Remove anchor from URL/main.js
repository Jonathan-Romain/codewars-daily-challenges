// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"



// Solution 1

function removeUrlAnchor(url){
  //use a conditional statement along with the String method includes to check if '#' is present in the string.
  if(url.includes('#')){
    //if true. use the string slice method to return string from index 0 to url.indexOf
    return url.slice(0, url.indexOf('#'))
    // if '#' is not present. return the url.
  } else {
    return url;
  }
}
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))


//Solution 2

const removeUrlAnchor = url => url.includes('#') ? url.slice(0, url.indexOf('#')) : url;