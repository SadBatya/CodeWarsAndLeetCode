// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// ============================================
// РЕШЕНИЕ:
// Оптимальный способ - перевернуть половину числа и сравнить с другой половиной.
// Отрицательные числа не могут быть палиндромами.
// Если число заканчивается на 0 (кроме 0), оно не может быть палиндромом.
// Переворачиваем правую половину числа и сравниваем с левой.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(log₁₀(n)) - количество цифр в числе
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var isPalindrome = function (x) {
  // Шаг 1: Отрицательные числа не могут быть палиндромами
  if (x < 0) return false;
  
  // Шаг 2: Если число заканчивается на 0 и не равно 0, не может быть палиндромом
  if (x !== 0 && x % 10 === 0) return false;

  // Шаг 3: Переворачиваем правую половину числа
  let reversed = 0;
  let original = x;

  // Шаг 4: Продолжаем пока original больше reversed
  while (original > reversed) {
    // Шаг 5: Добавляем последнюю цифру original к reversed
    reversed = reversed * 10 + (original % 10);
    // Шаг 6: Убираем последнюю цифру из original
    original = Math.floor(original / 10);
  }

  // Шаг 7: Для четного количества цифр: original === reversed
  // Для нечетного: original === Math.floor(reversed / 10) (серединная цифра игнорируется)
  return original === reversed || original === Math.floor(reversed / 10);
};

// console.log(isPalindrome(121)); // True
// console.log(isPalindrome(-121)); // False
