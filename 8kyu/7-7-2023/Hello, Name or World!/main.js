// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"


function hello(name) {
    //if name is an empty string
    //if name is not given
    //ternary operator returns first option is either condition is meet
    // if false. literal notation will be used for the input
    // index 0 of input will be capitalized with toUpperCase string method
    // the slice string method will be used on index 1 along with the toLowerCase string method to lowercase remainder of element. 
    return name === '' || !name ? `Hello, World!`: `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` 
  }
  console.log(hello('jonathan'))