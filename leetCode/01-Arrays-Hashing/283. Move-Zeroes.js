// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// ============================================
// РЕШЕНИЕ:
// Используем технику двух указателей. Один указатель (left) указывает на позицию
// для следующего ненулевого элемента. Проходим по массиву и меняем местами
// ненулевые элементы с позицией left.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var moveZeroes = function(nums) {
  // Шаг 1: Указатель на позицию для следующего ненулевого элемента
  let left = 0;

  // Шаг 2: Проходим по массиву начиная со второго элемента
  for (let i = 0; i < nums.length; i++) {
    // Шаг 3: Если текущий элемент не равен нулю
    if (nums[i] !== 0) {
      // Шаг 4: Меняем местами с элементом на позиции left
      [nums[left], nums[i]] = [nums[i], nums[left]];
      // Шаг 5: Увеличиваем left (следующая позиция для ненулевого элемента)
      left++;
    }
  }
};

console.log(moveZeroes(nums));
console.log(moveZeroes(nums2));
