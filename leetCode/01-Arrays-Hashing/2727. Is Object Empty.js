// 2727. Is Object Empty
// Easy
// Companies
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.

// ============================================
// РЕШЕНИЕ:
// Проверяем тип объекта. Если это массив, проверяем его длину.
// Если это объект, проверяем количество ключей. Пустой объект/массив
// имеет длину/количество ключей равное 0.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(1) для массивов, O(n) для объектов где n - количество ключей
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var isEmpty = function(obj) {
  // Шаг 1: Проверяем, является ли объект массивом
  if (Array.isArray(obj)) {
      // Шаг 2: Массив пуст, если его длина равна 0
      return obj.length === 0;
  } else {
      // Шаг 3: Для объекта получаем массив ключей
      const arr = Object.keys(obj);
      // Шаг 4: Объект пуст, если количество ключей равно 0
      return arr.length === 0;
  }
};