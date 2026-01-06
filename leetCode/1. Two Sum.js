// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// ============================================
// РЕШЕНИЕ:
// Используем хеш-таблицу (Map) для хранения уже просмотренных чисел и их индексов.
// Проходим по массиву один раз: для каждого числа вычисляем complement = target - nums[i].
// Если complement уже есть в Map, значит нашли пару. Иначе добавляем текущее число в Map.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - для хранения Map с максимум n элементами
// ============================================

var twoSum = function (nums, target) {
  // Шаг 1: Создаем Map для хранения чисел и их индексов
  const map = new Map();

  // Шаг 2: Проходим по массиву один раз
  for (let i = 0; i < nums.length; i++) {
    // Шаг 3: Вычисляем complement - число, которое нужно найти
    const complement = target - nums[i];

    // Шаг 4: Проверяем, есть ли complement в Map
    if (map.has(complement)) {
      // Шаг 5: Если есть, возвращаем индексы пары
      return [map.get(complement), i];
    }

    // Шаг 6: Если нет, сохраняем текущее число и его индекс в Map
    map.set(nums[i], i);
  }

  // Шаг 7: Если пара не найдена (не должно произойти по условию)
  return [];
};

// const arr = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum(arr, target));
