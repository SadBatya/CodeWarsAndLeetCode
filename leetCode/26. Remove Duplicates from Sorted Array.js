// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// ============================================
// РЕШЕНИЕ:
// Используем технику двух указателей. Один указатель (j) указывает на позицию
// для следующего уникального элемента, другой (i) проходит по массиву.
// Когда находим новый уникальный элемент, перемещаем его на позицию j+1.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - модифицируем массив на месте
// ============================================

var removeDuplicates = function (nums) {
  // Шаг 1: Проверяем, что массив не пустой
  if (nums.length === 0) return 0;

  // Шаг 2: Указатель на позицию последнего уникального элемента
  let j = 0;

  // Шаг 3: Проходим по массиву начиная со второго элемента
  for (let i = 1; i < nums.length; i++) {
    // Шаг 4: Если текущий элемент отличается от последнего уникального
    if (nums[i] !== nums[j]) {
      // Шаг 5: Увеличиваем указатель на уникальные элементы
      j++
      // Шаг 6: Перемещаем новый уникальный элемент на правильную позицию
      nums[j] = nums[i];
    }
  }

  // Шаг 7: Возвращаем количество уникальных элементов (j + 1, так как индексация с 0)
  return j + 1;
};
