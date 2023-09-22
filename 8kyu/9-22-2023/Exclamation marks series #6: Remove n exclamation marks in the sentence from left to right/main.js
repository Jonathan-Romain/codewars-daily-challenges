// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"




function remove(s,n){
    for(let i = 0; i < n; i++ ){
      console.log(s )
      s = s.replace('!','');
    }
     return s;
   }
   
   // for loop iterates for 0 through n incrementing by 1
   
   // each iteration teh loop uses the replace string method for the first occurence of '!' replacing it with ''(empty space)
   
   // after each iteration the modified string is assigned back to the variable 's', overwriting the original value


   function remove(s,n){
    while(n) {
      s = s.replace("!", "");
      n--;
    }
    return s;
  }



  const remove = (s, n) => n ? remove(s.replace('!', ''), n - 1) : s;