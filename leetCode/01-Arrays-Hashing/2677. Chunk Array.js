// 2677. Chunk Array
// Easy
// Companies
// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

// ============================================
// РЕШЕНИЕ:
// Проходим по массиву с шагом size. На каждой итерации используем slice
// для извлечения подмассива размера size и добавляем его в результат.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) где n - длина массива
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - для хранения результата
// ============================================

var chunk = function (arr, size) {
  // Шаг 1: Массив для результата
  let result = [];

  // Шаг 2: Проходим по массиву с шагом size
  for (let i = 0; i < arr.length; i += size) {
    // Шаг 3: Извлекаем подмассив размера size начиная с индекса i
    result.push(arr.slice(i, i + size));
  }
  
  // Шаг 4: Возвращаем массив чанков
  return result;
};
