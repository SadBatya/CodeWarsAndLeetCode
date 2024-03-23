// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

// Example 1:

// Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// Example 2:

// Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false
// Example 3:

// Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

let canThreePartsEqualSum = function (arr) {
  let total = arr.reduce(prevCurrent, current => prevCurrent + current, 0);

  if (total % 3 !== 0) {
    return false;
  }

  let targetSum = total / 3
  let partitionCount = 0
  let currentSum = 0

  for(let i = 0; i < arr.length; i++){
    currentSum += arr[i]
    currentSum = 0
  }

  return partitionCount === 2
};
const arr1 = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
console.log(canThreePartsEqualSum(arr1)); // Ожидаемый результат: true