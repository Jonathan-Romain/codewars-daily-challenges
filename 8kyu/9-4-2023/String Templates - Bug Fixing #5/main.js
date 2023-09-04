// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!




function buildString(...template){
    // A function definition's last parameter can be prefixed with the rest parameters syntax (...template) which will cause all remaining (user supplied) parameters to be placed within an Array object.
    // use the template literal will concatenate the string with the expression
    // in this case the 
    return `I like ${template.join(', ')}!`;
  }
  console.log(buildString('Cheese'))