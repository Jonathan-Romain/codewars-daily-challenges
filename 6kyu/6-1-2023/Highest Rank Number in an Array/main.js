// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

document.querySelector("h1").innerText = hightestRank;

function highestRank(arr) {
    const ascend = arr.sort((a, b) => a - b);
    let maxCount = 0;
    let mostFrequent = ascend[0];
    let currentCount = 1;
  
    for (let i = 1; i < ascend.length; i++) {
      if (ascend[i] === ascend[i - 1]) {
        currentCount++;
      } else {
        if (currentCount > maxCount || (currentCount === maxCount && ascend[i - 1] > mostFrequent)) {
          maxCount = currentCount;
          mostFrequent = ascend[i - 1];
        }
        currentCount = 1;
      }
    }
  
    // Check if the last element is the most frequent
    if (currentCount > maxCount || (currentCount === maxCount && ascend[ascend.length - 1] > mostFrequent)) {
      mostFrequent = ascend[ascend.length - 1];
    }
  
    return mostFrequent;
  }

console.log(hightestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10, 10]))