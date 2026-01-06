// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// ============================================
// РЕШЕНИЕ:
// Используем первый элемент массива как эталон. Для каждой позиции символа
// проверяем, совпадает ли этот символ во всех остальных строках.
// Если находим несовпадение или строка короче, возвращаем префикс до этой позиции.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(S) где S - сумма всех символов во всех строках
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var longestCommonPrefix = function(strs) {
  // Шаг 1: Проверяем, что массив не пустой
  if(strs.length === 0) return ''

  // Шаг 2: Проходим по символам первой строки (используем её как эталон)
  for(let i = 0; i < strs[0].length; i++){
      // Шаг 3: Берем текущий символ из первой строки
      const char = strs[0][i]

      // Шаг 4: Проверяем этот символ во всех остальных строках
      for(let j = 1; j < strs.length; j++){
          // Шаг 5: Если текущая строка короче или символ не совпадает
          if (i >= strs[j].length || strs[j][i] !== char) {
              // Шаг 6: Возвращаем префикс до текущей позиции
              return strs[0].substring(0, i);
          }
      }
  }

  // Шаг 7: Если все символы первой строки совпадают, возвращаем всю первую строку
  return strs[0]
};