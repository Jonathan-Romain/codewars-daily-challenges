// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.




function evaporator(content, evap_per_day, threshold){ 
    // initializing the day variable to 0, which will keep track of the number of days it takes for the content to reach the threshold
    let days = 0
    //the content variable is set to 100, representing the liquid at its initial content level of 100%
        content = 100
    //while loop runs as long as the content is greater than or equal to the threshold
    while(content >= threshold){
      //In each iteration of the loop, the content is reduced by an amount calculated as content * evap_per_day / 100. This calculates the evaporation for the current day based on the evaporation rate. 
      content -= content * evap_per_day / 100
      //days is incremented by 1 after each day of evaporation.
      days++
    }
    return days
  }
  console.log(evaporator(10,10,10))