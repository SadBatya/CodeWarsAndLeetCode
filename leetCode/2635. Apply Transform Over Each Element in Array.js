// 2635. Apply Transform Over Each Element in Array
// Easy
// Companies
// Hint
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// ============================================
// РЕШЕНИЕ:
// Реализуем функцию map вручную. Проходим по массиву и применяем
// функцию fn к каждому элементу, заменяя его результатом.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) где n - длина массива
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - модифицируем массив на месте
// ============================================

var map = function (arr, fn) {
  // Шаг 1: Проходим по каждому элементу массива
  for (let i = 0; i < arr.length; i++) {
    // Шаг 2: Применяем функцию fn к элементу и его индексу, заменяем элемент результатом
    arr[i] = fn(arr[i], i);
  }
  
  // Шаг 3: Возвращаем модифицированный массив
  return arr;
};
