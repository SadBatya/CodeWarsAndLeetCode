// 169. Majority Element
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let nums = [2, 2, 1, 1, 1, 2, 2];
let nums2 = [3,3,3,4,4,4,4,4,1,6,6,6,6,6,6,6]

let majorityElement = function (nums) {
  if (nums.length === 0) return 0;

  let count = 0;
  let majorNum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!count) {
      majorNum = nums[i];
      count = 1;
    } else {
      count += (nums[i] === majorNum ? 1 : -1)
    }
  }
  return console.log(majorNum)
};

majorityElement(nums);
majorityElement(nums2);
