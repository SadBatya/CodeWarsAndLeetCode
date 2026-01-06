// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of strings words and a character separator, split each string in words by separator.

// Return an array of strings containing the new strings formed after the splits, excluding empty strings.

// Notes

// separator is used to determine where the split should occur, but it is not included as part of the resulting strings.
// A split may result in more than two strings.
// The resulting strings must maintain the same order as they were initially given.

// ============================================
// РЕШЕНИЕ:
// Проходим по каждому слову в массиве, разбиваем его по separator,
// добавляем все части в результат. Затем фильтруем пустые строки.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n * m) где n - количество слов, m - средняя длина слова
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n * m) - для хранения результата
// ============================================

var splitWordsBySeparator = function(words, separator) {
  // Шаг 1: Если separator не задан, возвращаем исходный массив
  if (!separator) return words;

  // Шаг 2: Массив для результата
  const result = [];

  // Шаг 3: Проходим по каждому слову
  for (let word of words) {
    // Шаг 4: Если слово не пустое
    if (word !== "") {
      // Шаг 5: Разбиваем слово по separator
      const wordArr = word.split(separator);
      // Шаг 6: Добавляем все части в результат (используем spread для добавления элементов)
      result.push(...wordArr);
    }
  }

  // Шаг 7: Фильтруем пустые строки и возвращаем результат
  return result.filter((str) => str !== "");
};

// Input: words = ["one.two.three","four.five","six"], separator = "."
// Output: ["one","two","three","four","five","six"]
// Explanation: In this example we split as follows:

// "one.two.three" splits into "one", "two", "three"
// "four.five" splits into "four", "five"
// "six" splits into "six" 

// Hence, the resulting array is ["one","two","three","four","five","six"].