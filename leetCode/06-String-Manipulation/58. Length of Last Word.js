// Code
// Testcase
// Testcase
// Test Result
// 58. Length of Last Word
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// ============================================
// РЕШЕНИЕ:
// Удаляем пробелы в начале и конце строки, разбиваем на слова,
// берем последнее слово и возвращаем его длину.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) где n - длина строки
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - для хранения массива слов
// ============================================

export const lengthOfLastWord = (s) => {
  // Шаг 1: Удаляем пробелы в начале и конце строки
  const trimmedString = s.trim();

  // Шаг 2: Разбиваем строку на слова по пробелам
  const words = trimmedString.split(" ");

  // Шаг 3: Берем последнее слово из массива
  const lastWord = words[words.length - 1];

  // Шаг 4: Возвращаем длину последнего слова
  return lastWord.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));

// Более оптимально решение

// export const lengthOfLastWord = (s) => {
//   let length = 0;
//   let i = s.length - 1;

//   // пропускаем пробелы в конце
//   while (i >= 0 && s[i] === " ") {
//     i--;
//   }

//   // считаем длину последнего слова
//   while (i >= 0 && s[i] !== " ") {
//     length++;
//     i--;
//   }

//   return length;
// };
