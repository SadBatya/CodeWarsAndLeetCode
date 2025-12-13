// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

var longestSubarray = function (nums) {
  let k = 1;
  let begin = 0;
  let window_state = 0;
  let result = 0;

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

  return result - 1;
};
