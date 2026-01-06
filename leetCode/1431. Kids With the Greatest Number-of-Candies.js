// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

// ============================================
// РЕШЕНИЕ:
// Находим максимальное количество конфет в исходном массиве. Для каждого ребенка
// проверяем, будет ли его количество конфет (текущее + extraCandies) >= максимального.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход для поиска максимума, один для map
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - массив результатов размера n
// ============================================

var kidsWithCandies = function (candies, extraCandies) {
  // Шаг 1: Находим максимальное количество конфет в исходном массиве
  const maxCandies = Math.max(...candies);
  
  // Шаг 2: Для каждого ребенка проверяем, будет ли у него максимальное количество
  // после добавления extraCandies
  let result = candies.map(value => value + extraCandies >= maxCandies);
  
  // Шаг 3: Возвращаем массив булевых значений
  return result;
};

kidsWithCandies(candies, extraCandies);
