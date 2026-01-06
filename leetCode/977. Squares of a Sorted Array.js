// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// ============================================
// РЕШЕНИЕ:
// Используем технику двух указателей. Так как массив отсортирован, наибольшие квадраты
// будут на краях. Сравниваем квадраты элементов слева и справа, заполняем результат
// справа налево (от большего к меньшему).
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - массив результатов размера n
// ============================================

var sortedSquares = function(nums) {
  // Шаг 1: Инициализируем два указателя: слева и справа
  let left = 0;
  let right = nums.length - 1;
  // Шаг 2: Массив для результата
  let result = [];

  // Шаг 3: Заполняем результат справа налево (от большего к меньшему)
  for (let i = nums.length - 1; i >= 0; i--) {
    // Шаг 4: Вычисляем квадраты элементов на краях
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    // Шаг 5: Сравниваем квадраты и берем больший
    if (leftSquare > rightSquare) {
      // Шаг 6: Если левый квадрат больше, записываем его и двигаем left вправо
      result[i] = leftSquare;
      left++;
    } else {
      // Шаг 7: Иначе записываем правый квадрат и двигаем right влево
      result[i] = rightSquare;
      right--;
    }
  }

  // Шаг 8: Возвращаем отсортированный массив квадратов
  return result;
};

console.log(sortedSquares(example));
