// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke













// function getOrder(input) {
//   //
//   let order = []
//   let food = new Set(['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'milkshake', 'coke', 'onionrings'])
  
//   let arr = '';
  
//   for (let c of [...input]){
//     arr += c
// //     console.log(arr)
//     if(food.has(arr)){
//       order.push(arr);
//       arr = ''
//     }
//   }
//   return order.map(food => food.charAt(0).toUpperCase() + food.slice(1)).sort().join(' ')
// }

function getOrder(input) {
  
    // an empty array 'order' is initialized to store the order menu items
    // menu is created as an array to store the the items that will be checked against the input
    // a for of loop is used to iterate over each item in the menu
    // inside the loop the includes method checks if the current menu item exists in the input
    // if item is present it will be pushed to the empty array
    // the found menu item is removed using the replace method. This is done to prevent the same item form being added multiple times if it appears more than once in the input.
    
    let order = [];
    
    const menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
    
    for(let item of menu){
      while (input.includes(item)){
        order.push(item);
        input = input.replace(item, '');
      }
    }
    return order.map(food => food.charAt(0).toUpperCase() + food.slice(1)).join(' ')
  }