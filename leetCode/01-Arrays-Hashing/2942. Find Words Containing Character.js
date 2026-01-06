// 2942. Find Words Containing Character
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
// Example 2:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
// Example 3:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
// Output: []
// Explanation: "z" does not occur in any of the words. Hence, we return an empty array.

// Решение 1
// var findWordsContaining = function(words, x) {
//   const result = []

//   for(let i = 0; i < words.length; i++){
//       const wordArr = words[i].split('')
//       if(wordArr.includes(x)){
//           result.push(i)
//       }
//   }

//   return result
// };

// ============================================
// РЕШЕНИЕ:
// Проходим по каждому слову и проверяем, содержит ли оно символ x.
// Если содержит, добавляем индекс слова в результат и переходим к следующему слову.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n * m) где n - количество слов, m - средняя длина слова
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(k) где k - количество слов, содержащих x
// ============================================

var findWordsContaining = function (words, x) {
  // Шаг 1: Массив для хранения индексов слов, содержащих x
  const result = [];

  // Шаг 2: Проходим по каждому слову
  for (let i = 0; i < words.length; i++) {
    // Шаг 3: Проверяем каждый символ в слове
    for (let char of words[i]) {
      // Шаг 4: Если нашли символ x
      if (char === x) {
        // Шаг 5: Добавляем индекс слова в результат
        result.push(i);
        // Шаг 6: Прерываем внутренний цикл, переходим к следующему слову
        break;
      }
    }
  }

  // Шаг 7: Возвращаем массив индексов
  return result;
};
