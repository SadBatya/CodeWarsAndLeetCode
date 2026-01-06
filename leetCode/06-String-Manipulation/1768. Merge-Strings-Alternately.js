// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

// ============================================
// РЕШЕНИЕ:
// Используем два указателя для обеих строк. Поочередно добавляем символы
// из word1 и word2. Когда одна строка заканчивается, добавляем остаток другой.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(m + n) где m и n - длины строк
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(m + n) - для результирующей строки
// ============================================

var mergeAlternately = function(word1, word2) {
  // Шаг 1: Результирующая строка
  let result = '';
  // Шаг 2: Указатели для обеих строк
  let i = 0;
  let j = 0;

  // Шаг 3: Продолжаем пока не обработали обе строки
  while (i < word1.length || j < word2.length) {
    // Шаг 4: Если есть символы в word1, добавляем его
    if (i < word1.length) {
      result += word1[i];
      i++;
    }

    // Шаг 5: Если есть символы в word2, добавляем его
    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }

  // Шаг 6: Возвращаем объединенную строку
  return result;
};

console.log(mergeAlternately(word1,word2))
