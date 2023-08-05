// 285058089% of 13,63139,451 of 132,177GiacomoSorbi
// JavaScript
// TRAIN AGAINNEXT KATA
// Details
// Solutions
// Forks (57)
// Discourse (959)
// Translations
// Fork|Collect|
// DESCRIPTION:
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)





function tribonacci(signature, n){
    // 1. Assign a function to sum and initialize arr and then further clarify arr by performing a reduce method on it. This configuration will be used later to process data in a manner particular to the instructions of the challenge
    let sum = arr => arr.reduce((acc, cur) => acc + cur)
    // 2. Assign the signature perimeter to variable, giving it the spread operator in order to include any number of arguments
    let newArr = [...signature]
    let index = 0;
    // 3. The while loop specifies how many of those arguments will be included by indicating the arguments must stop when the length of the array is equal to argument "n"
    while(newArr.length < n){
      // 4. As the while loop runs, the sum function is run on the array that itself has the slice method run on it with intervals from index to index incremented by 3. run through the sum function which adds these together and produces the sums asked for in the tribonacci sequence. These sums are pushed into the array above and return no error.
      const thisNum = sum(newArr.slice(index, index++ + 3));
      newArr.push(thisNum);
    }
    // 5. If "n" argument is defined otherwise, then redo the slice method assigned to thisNum as whatever the "n" argument is as the argument would return in error if attempted in the function created above.
    return n > 3 ? newArr : newArr.slice(0, n)
  }
  console.log(tribonacci([[1, 1, 1], 10]))