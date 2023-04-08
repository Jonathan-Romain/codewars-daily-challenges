// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let string = "";
    for(let i = 0; i < this.length; i+=1){
      if (this[i].toUpperCase() === this[i]){
        string += this[i].toLowerCase()
      } else {
        string += this[i].toUpperCase()
      }
    }
    return string
  }
  // String.prototype.toAlternatingCase = function () {
  //   let newString = ""
  //   for(let a = 0; a < this.length; a++) {
  //     if (this[a].toUpperCase() == this[a]) {
  //       newString += this[a].toLowerCase()
  //     } else {
  //       newString += this[a].toUpperCase()
  //     }
  //   }
  //   return newString
  // }