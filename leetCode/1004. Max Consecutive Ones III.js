// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

var longestOnes = function (nums, k) {
  let begin = 0;
  let window_state = 0;
  let result = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      window_state++;
    }
    while (window_state > k) {
      if (nums[begin] === 0) {
        window_state--;
      }
      begin++;
    }

    result = Math.max(result, i - begin + 1);
  }

  return result;
};
