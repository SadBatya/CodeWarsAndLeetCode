// 125. Valid Palindrome
// Easy
// Topics
// premium lock icon
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// ============================================
// РЕШЕНИЕ:
// Очищаем строку от небуквенно-цифровых символов и приводим к нижнему регистру.
// Затем сравниваем строку с её обратной версией.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход для очистки и один для сравнения
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - создаем очищенную строку
// ============================================

var isPalindrome = function (s) {
  // Шаг 1: Создаем регулярное выражение для удаления небуквенно-цифровых символов
  const regex = /[^a-zA-Z0-9]/g;
  // Шаг 2: Очищаем строку и приводим к нижнему регистру
  const clean = s.replace(regex, "").toLowerCase();

  // Шаг 3: Сравниваем очищенную строку с её обратной версией
  return clean === clean.split("").reverse().join("");
};

// Решение с помощью двух указателей
// var isPalindrome = function (s) {
//   const regex = /[^a-zA-Z0-9]/g;
//   const clean = s.replace(regex, "").toLowerCase();

//   let l = 0;
//   let r = clean.length - 1;

//   while (l <= r) {
//     if (clean[l] === clean[r]) {
//       l++;
//       r--;
//     } else {
//       return false;
//     }
//   }

//   return true;
// };
