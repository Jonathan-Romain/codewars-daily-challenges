// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num){
    //declare variable and .toString converts input into a string. The .split() method splits the string into an array of individual digits.
    let numSplit = num.toString().split('');
    //New variable is declared and the .map() method is applied to the array of digits, squaring each digit by multiplying it with itself.
    let sqEachNum = numSplit.map(a => a * a);
    //New variable is declared and the array of squared digits is then joined into a single string by using the .join() method.
    let joinEachSq = sqEachNum.join('');
    //The joined string is converted back to a number using the unary plus operator and returned as a result.
    return +joinEachSq;
}
console.log(squareDigits(52))

// For loop

function squareDigit(num){
    let numString = num.toString();
    let result = '';

    for(let i = 0; i < numString.length; i++){
        let digit = parseInt(numString[i]);
        let squaredDigit = digit * digit;
        result = result + squaredDigit.toString();
    }
    return parseInt(result);
}

