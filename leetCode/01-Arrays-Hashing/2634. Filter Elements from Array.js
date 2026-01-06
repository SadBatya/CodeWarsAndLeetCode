// 2634. Filter Elements from Array
// Easy
// Companies
// Hint
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

// ============================================
// РЕШЕНИЕ:
// Реализуем функцию filter вручную. Проходим по массиву и добавляем
// в результат только те элементы, для которых fn возвращает truthy значение.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) где n - длина массива
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - для хранения результата
// ============================================

var filter = function (arr, fn) {
  // Шаг 1: Массив для результата
  let res = [];
  
  // Шаг 2: Проходим по каждому элементу массива
  for (let i = 0; i < arr.length; i++) {
    // Шаг 3: Проверяем, возвращает ли функция fn truthy значение
    if (fn(arr[i], i)) {
      // Шаг 4: Если да, добавляем элемент в результат
      res.push(arr[i]);
    }
  }
  
  // Шаг 5: Возвращаем отфильтрованный массив
  return res;
};
