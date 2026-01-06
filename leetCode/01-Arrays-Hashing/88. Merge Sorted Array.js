// 88. Merge Sorted Array
// Easy
// Topics
// Companies
// Hint
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// ============================================
// РЕШЕНИЕ:
// Используем технику слияния с конца (merge from end). Начинаем с конца обоих массивов
// и заполняем nums1 справа налево. Это позволяет не перезаписывать элементы nums1,
// которые еще не обработаны.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(m + n) - проходим по обоим массивам один раз
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var merge = function (nums1, m, nums2, n) {
  // Шаг 1: Указатели на концы массивов
  let i = m - 1;  // Последний элемент в nums1
  let j = n - 1;  // Последний элемент в nums2
  let k = m + n - 1;  // Позиция для записи в nums1

  // Шаг 2: Пока оба массива не обработаны
  while (i >= 0 && j >= 0) {
    // Шаг 3: Сравниваем элементы с конца
    if (nums1[i] > nums2[j]) {
      // Шаг 4: Если элемент из nums1 больше, записываем его
      nums1[k] = nums1[i];
      i--;
    } else {
      // Шаг 5: Иначе записываем элемент из nums2
      nums1[k] = nums2[j];
      j--;
    }
    // Шаг 6: Переходим к следующей позиции
    k--;
  }

  // Шаг 7: Если остались элементы в nums2, копируем их
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  // Шаг 8: Элементы nums1 уже на своих местах, если остались
  // nums1 модифицирован на месте
};
