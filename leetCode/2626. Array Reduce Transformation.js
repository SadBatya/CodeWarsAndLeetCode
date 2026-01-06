// 2626. Array Reduce Transformation
// Solved
// Easy
// Companies
// Hint
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// ============================================
// РЕШЕНИЕ:
// Реализуем функцию reduce вручную. Начинаем с init, затем последовательно
// применяем функцию fn к каждому элементу массива, передавая результат
// предыдущей итерации как аккумулятор.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) где n - длина массива
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var reduce = function (nums, fn, init) {
  // Шаг 1: Инициализируем результат начальным значением
  let res = init;

  // Шаг 2: Проходим по каждому элементу массива
  for (let i = 0; i < nums.length; i++) {
    // Шаг 3: Применяем функцию fn к текущему результату и элементу массива
    res = fn(res, nums[i]);
  }

  // Шаг 4: Возвращаем финальный результат
  return res;
};
