// 238. Product of Array Except Self
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// ============================================
// РЕШЕНИЕ:
// Используем два прохода: первый проход заполняет результат произведениями префиксов
// (все элементы слева от текущего), второй проход умножает на произведения суффиксов
// (все элементы справа от текущего). Это дает произведение всех элементов кроме текущего.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - два прохода по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - не считая выходного массива (O(n))
// ============================================

var productExceptSelf = function (nums) {
  // Шаг 1: Создаем массив для результата
  let res = [];
  // Шаг 2: Переменная для хранения произведения префикса
  let start = 1;

  // Шаг 3: Первый проход - заполняем произведениями префиксов
  for (let i = 0; i < nums.length; i++) {
    // Шаг 4: Записываем произведение всех элементов слева
    res.push(start);
    // Шаг 5: Обновляем произведение префикса
    start = start * nums[i];
  }

  // Шаг 6: Переменная для хранения произведения суффикса
  let start2 = 1;

  // Шаг 7: Второй проход - умножаем на произведения суффиксов
  for (let i = nums.length - 1; i >= 0; i--) {
    // Шаг 8: Умножаем на произведение всех элементов справа
    res[i] = start2 * res[i];
    // Шаг 9: Обновляем произведение суффикса
    start2 = start2 * nums[i];
  }

  // Шаг 10: Возвращаем результат
  return res;
};

console.log(productExceptSelf(nums));
