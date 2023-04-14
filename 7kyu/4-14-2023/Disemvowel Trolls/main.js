// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.



function disemvowel(str) {
    // the two forward specify the start and end of the regular expression
    // the [] brackets specify a pattern for any of the characters in the group. 
    // the g is for global regex flag. It is used to match all occurrences of the regex pattern.
    // the i is for ignore case and is used to perform a case insensitive search for a regex match in the given string. 
    return str.replace(/[aeiou]/gi, '');
  }