// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).





function billboard(name, price = 30){
    // use the split string method to convert string into an array
    // map array method loop over every element in the array and convert each element to the price parameter value
    // reduce array method add each element until completion
    return name.split('').map((a)=> a=price).reduce((a,b) => a + b,0)
  } 
  console.log(billboard("Hadufuns John", 20))