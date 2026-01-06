// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// ============================================
// РЕШЕНИЕ:
// Используем два указателя: один для строки s, другой для строки t.
// Проходим по t и ищем символы из s в том же порядке. Если находим все символы s,
// значит s является подпоследовательностью t.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) где n - длина строки t
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var isSubsequence = function (s, t) {
  // Шаг 1: Если s длиннее t, не может быть подпоследовательностью
  if (s.length > t.length) {
    return false;
  }

  // Шаг 2: Указатель на текущий символ в строке s
  let subseq = 0;
  
  // Шаг 3: Проходим по строке t
  for (let i = 0; i < t.length; i++) {
    // Шаг 4: Если текущий символ в t совпадает с текущим символом в s
    if (s[subseq] === t[i]) {
      // Шаг 5: Переходим к следующему символу в s
      subseq++;
    }
  }
  
  // Шаг 6: Если прошли всю строку s, значит она является подпоследовательностью
  return subseq === s.length;
};
console.log(isSubsequence(s, s2));
