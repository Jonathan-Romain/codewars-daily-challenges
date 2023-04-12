// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    //The replace method will replace an empty string in place of every exlamation point in the string.
    return s.replaceAll('!','');
  }