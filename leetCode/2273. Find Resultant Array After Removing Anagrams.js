// You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

// In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

// Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

// Example 1:

// Input: words = ["abba","baba","bbaa","cd","cd"]
// Output: ["abba","cd"]
// Explanation:
// One of the ways we can obtain the resultant array is by using the following operations:
// - Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
//   Now words = ["abba","baba","cd","cd"].
// - Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
//   Now words = ["abba","cd","cd"].
// - Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
//   Now words = ["abba","cd"].
// We can no longer perform any operations, so ["abba","cd"] is the final answer.
// Example 2:

// Input: words = ["a","b","c","d","e"]
// Output: ["a","b","c","d","e"]
// Explanation:
// No two adjacent strings in words are anagrams of each other, so no operations are performed.

// ============================================
// РЕШЕНИЕ:
// Проходим по массиву слов. Для каждого слова проверяем, является ли оно
// анаграммой предыдущего слова в результате. Если нет, добавляем его.
// Два слова - анаграммы, если их отсортированные символы совпадают.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n * m * log m) где n - количество слов, m - средняя длина слова
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - для хранения результата
// ============================================

var removeAnagrams = function (words) {
  // Шаг 1: Начинаем с первого слова
  const result = [words[0]];

  // Шаг 2: Проходим по остальным словам
  for (let i = 1; i < words.length; i++) {
    const current = words[i];
    // Шаг 3: Берем последнее слово из результата
    const prev = result[result.length - 1];

    // Шаг 4: Функция для проверки, являются ли слова анаграммами
    const isAnagram = (word1, word2) => {
      // Шаг 5: Если длины разные, не могут быть анаграммами
      if (word1.length !== word2.length) return false;

      // Шаг 6: Сортируем символы обоих слов и сравниваем
      const sorted1 = word1.split("").sort().join("");
      const sorted2 = word2.split("").sort().join("");

      return sorted1 === sorted2;
    };

    // Шаг 7: Если текущее слово не является анаграммой предыдущего, добавляем его
    if (!isAnagram(current, prev)) {
      result.push(current);
    }
  }

  // Шаг 8: Возвращаем результат
  return result;
};
