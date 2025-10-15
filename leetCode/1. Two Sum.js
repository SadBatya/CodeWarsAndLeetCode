// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Первое решение
// Сложность: O(n²)
// Память: O(1)

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

// Второе решение
// Сложность: O(n)
// Память: O(n)

// var twoSum = function (nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = nums[i] - target;

//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }

//     map.set(nums[i], i);
//   }

//   return [];
// };

// const arr = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum(arr, target));