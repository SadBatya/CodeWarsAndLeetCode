// 1456. Maximum Number of Vowels in a Substring of Given Length
// Medium
// Topics
// Companies
// Hint
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.


// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// ============================================
// РЕШЕНИЕ:
// Используем технику скользящего окна фиксированного размера k.
// Сначала подсчитываем гласные в первом окне, затем сдвигаем окно,
// обновляя счетчик (убираем уходящий символ, добавляем входящий).
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по строке
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var maxVowels = function(s, k) {
  // Шаг 1: Создаем Set для быстрой проверки гласных
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  // Шаг 2: Максимальное количество гласных
  let maxCount = 0;
  // Шаг 3: Текущее количество гласных в окне
  let currentCount = 0;

  // Шаг 4: Подсчитываем количество гласных в первом окне
  for (let i = 0; i < k; i++) {
      if (vowels.has(s[i])) {
          currentCount++;
      }
  }

  // Шаг 5: Устанавливаем начальное максимальное значение
  maxCount = currentCount;

  // Шаг 6: Сдвигаем окно по строке
  for (let i = k; i < s.length; i++) {
      // Шаг 7: Убираем символ из левой границы окна
      if (vowels.has(s[i - k])) {
          currentCount--;
      }
      // Шаг 8: Добавляем символ в правую границу окна
      if (vowels.has(s[i])) {
          currentCount++;
      }
      // Шаг 9: Обновляем максимальное количество гласных
      maxCount = Math.max(maxCount, currentCount);
  }

  // Шаг 10: Возвращаем максимальное количество гласных
  return maxCount;
};
