// 219. Contains Duplicate II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

// ============================================
// РЕШЕНИЕ:
// Используем скользящее окно размера k+1. Поддерживаем Set элементов в окне.
// Если размер окна превышает k, удаляем самый старый элемент.
// Если находим дубликат в окне, возвращаем true.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(min(n, k)) - размер Set не превышает k+1
// ============================================

var containsNearbyDuplicate = function (nums, k) {
  // Шаг 1: Создаем Set для хранения элементов в скользящем окне
  const windowSet = new Set();

  // Шаг 2: Проходим по массиву
  for (let i = 0; i < nums.length; i++) {
    // Шаг 3: Если размер окна превышает k, удаляем самый старый элемент
    if (i > k) {
      windowSet.delete(nums[i - k - 1]);
    }

    // Шаг 4: Проверяем, есть ли текущий элемент в окне
    if (windowSet.has(nums[i])) {
      // Шаг 5: Если есть, значит нашли дубликат в пределах k
      return true;
    }

    // Шаг 6: Добавляем текущий элемент в окно
    windowSet.add(nums[i]);
  }

  // Шаг 7: Если дубликаты не найдены
  return false;
};
