// 189. Rotate Array
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// ============================================
// РЕШЕНИЕ:
// Используем технику трех реверсов: сначала реверсим весь массив,
// затем реверсим первые k элементов и последние n-k элементов.
// Альтернативно: используем splice для перемещения элементов.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - модифицируем массив на месте
// ============================================

var rotate = function(nums, k) {
  // Шаг 1: Нормализуем k (на случай если k > nums.length)
  k = k % nums.length;
  
  // Шаг 2: Реверсим весь массив
  reverse(nums, 0, nums.length - 1);
  // Шаг 3: Реверсим первые k элементов
  reverse(nums, 0, k - 1);
  // Шаг 4: Реверсим оставшиеся элементы
  reverse(nums, k, nums.length - 1);
};

// Вспомогательная функция для реверса части массива
function reverse(nums, start, end) {
  // Шаг 5: Меняем местами элементы от start до end
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}