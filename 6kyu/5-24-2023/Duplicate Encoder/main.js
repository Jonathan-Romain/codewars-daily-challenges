// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncoder(word){
    let ignoreCase = word.toLowerCase().split('');
    let arr = [];
    for(let i = 0; i < ignoreCase.length; i++){
        if(arr[ignoreCase[i]]){
            arr[ignoreCase[i]] = arr[ignoreCase[i]] + 1;
        } else {
            arr[ignoreCase[i]] = 1;
        }
    }
    ignoreCase = ignoreCase.map((str)=>{
        if(arr[str] && arr[str] > 1){
            return ')';
        } else {
            return '(';
        }
    });
    return ignoreCase.join('');
}
console.log(duplicateEncoder('@Candyy'))   
