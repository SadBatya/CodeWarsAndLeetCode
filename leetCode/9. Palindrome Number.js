// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Время O(n)
// Память O(n)
// var isPalindrome = function(x) {
// if(x < 0) return
//   const isPalindrome = String(x).split('').reverse().join('')

//   return isPalindrome === String(x)
// };

// var isPalindrome = function (x) {
//   if (x < 0) return false;

//   let str = x.toString();
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     } else {
//       left++;
//       right--;
//     }
//   }

//   return true;
// };

// console.log(isPalindrome(121)); // True
// console.log(isPalindrome(-121)); // False
