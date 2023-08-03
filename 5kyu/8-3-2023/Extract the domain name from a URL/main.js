// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"



function domainName(url){
    //string replace method will replace an occurance with empty space
    url = url.replace('http://', '')
    url = url.replace('https://', '')
    url = url.replace('www.', '')
    // Array split method is used to split based on the dot . character.
    // element at index 0 is return via [0]
    console.log(url.split('.'))
    return url.split('.')[0]
  }
  console.log(domainName("http://github.com/carbonfive/raygun"))