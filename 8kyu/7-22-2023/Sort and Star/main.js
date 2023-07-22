// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


function twoSort(s) {
    // use the sort method to sort strings alphabetically.
    // the return the string at the 0 index of the array
    s = s.sort()[0];
    // the split string method is used to split each letter with a space. the join method is used to put *** between each letter
    return s.split('').join('***')
  }
  console.log(twoSort(["bitcoin", "take", "over", "air", "the", "world", "maybe", "who", "knows", "perhaps"]))