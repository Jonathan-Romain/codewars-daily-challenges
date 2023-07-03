// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].





function deleteNth(arr,n){
    //variable with an object to store the count of each element repeated
    const count = {};
    // variable stores an empty array for the final answer
    const answer = [];
    // for of loop takes arr parameter and stores into variable el
    for(const el of arr){
      //if count contains element stored in el. Add 1 to it's count
      if(count[el]) count[el] = count[el] + 1;
      // if not count value is assigned to 1
      else count[el] = 1;
      // if count element is less than or equal n. push to answer array.
      if(count[el] <= n) answer.push(el);
    };
    return answer;
  }
  console.log(deleteNth([20,37,20,21], 1))