// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)






function vowelIndices(word){
    //variable to create vowels
    let vowels = 'aeiouy'
    // initialize empty array
    let answers = []
    // lowercase the elements for parameter
    word = word.toLowerCase()
    //nested for loop to iterate through word and vowels
    for(let i = 0; i < word.length; i++){
      for(let j = 0; j < vowels.length; j++){
        //conditional statement to check if each element is a vowel
        if(word[i] === vowels[j]){
          //each vowel in word is pushed to the answer array and 1 is added to each index
          answers.push(i+1)
        }
      }
    }
    return answers
  }
  console.log(vowelIndices('supercalifragilisticexpialidocious'))