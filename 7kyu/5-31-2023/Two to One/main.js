// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// function longest(s1, s2){
//     alphabet = 'abcdefjhijklmnopqrstuvwxyz';
//     alphaSplit = alphabet.split('');
//     const sorted = s1.sort(=>)
//     return alphabet.split('')
// }
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));


// function longest(s1, s2){
//     let res = [];
//    for(let i = 0; i < s1.length; i++){
//     for(let j = 0; j < s2.length; j++){
//         if(s1[i] === s2[j]){
//             res.push(s1[i]);
//         } else{
//             res.pop(s1[1])
//         }
//     }
//    }
//    return s1[i];
// }
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));


function longest(s1, s2){
    let output = []; // [];
    let combine = s1.concat(s2); // xyaabbbccccdefwwxxxxyyyyabklmopq
    let array = combine.split('').sort(); //['a', 'a', 'a', 'b', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'e', 'f', 'k', 'l', 'm', 'o', 'p', 'q', 'w', 'w', 'x', 'x', 'x', 'x', 'x', 'y', 'y', 'y', 'y', 'y']

    for(let i = 0; i < array.length; i++){
        array[i] // will test occurances of each letter
        if(!output.includes(array[i])){
            console.log(output.push(array[i]));//will push each letter to the array once
        }
    }
    return output.join(''); //will join the remaining elements into a string.
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));