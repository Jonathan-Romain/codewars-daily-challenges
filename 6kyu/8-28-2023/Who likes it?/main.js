// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.






function likes(names) {
    // use conditionals to check the length of the elements in the array
    // return the index of the array and literal notation
    if(names.length === 0){
      return `no one likes this`
    } else if (names.length === 1){
      return `${names[0]} likes this`
    } else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      // use the slice array method to slice for index at the 1st index through the last index
      // then use the length to count the number of sliced element in the array
      return `${names[0]}, ${names[1]} and ${names.slice(1, names.length - 1).length} others like this`
    }
  }
  // console.log(likes([]))
  // console.log(likes(['Peter']))
  // console.log(likes(['Peter', 'Max']))
  // console.log(likes(['Peter', 'Max','Jacob']))
  console.log(likes(['Peter', 'Max', 'Jacob', 'Mark']))
  // console.log(likes(['Peter', 'Max','Jacob', 'Mark', 'Phil']))