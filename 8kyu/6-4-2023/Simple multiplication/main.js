// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number){
    let even = number % 2 === 0;

    switch (true) {
        case even:
            return number * 8; 
            break;
    
        default:
            return number * 9;
            break;
    }
}

console.log(simpleMultiplication(5))


// function simpleMultiplication(number){
//     if(number % 2 === 0){
//         return number * 8;
//     } else {
//         return number * 9;
//     }
// }
// console.log(simpleMultiplication(6))

// const simpleMultiplication = (number) => number % 2 === 0 ? number * 8 : number * 9;
// console.log(simpleMultiplication(5))