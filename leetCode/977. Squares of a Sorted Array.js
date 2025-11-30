// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

const example = [-4, -1, 0, 3, 10];

// Самое простое решение в лоб но имеет Big(O) n2
// const sortedSquares = (nums) => {
//   return nums.sort((a, b) => a - b).map((num) => num * num);
// };

// Решение с помощью двух указателей со сложнотью O(n)
const sortedSquares = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let result = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[i] = leftSquare;
      left++;
    } else {
      result[i] = rightSquare;
      right--;
    }
  }

  return result;
};

console.log(sortedSquares(example));
