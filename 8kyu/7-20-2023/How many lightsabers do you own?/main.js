// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18



function howManyLightsabersDoYouOwn(name) {
    // name is not equal to the type and value of the string Zach. 
    // ternary operator is used for the conditional. true 0 and false 18
    return name !== 'Zach'? 0 : 18;
  }