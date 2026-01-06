// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// ============================================
// РЕШЕНИЕ:
// Проходим по числам от 1 до n и проверяем делимость на 3 и 5.
// Если делится на оба - "FizzBuzz", на 3 - "Fizz", на 5 - "Buzz", иначе само число.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход от 1 до n
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - массив результатов размера n
// ============================================

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  // Шаг 1: Создаем массив для результата
  let arr = [];
  
  // Шаг 2: Проходим по числам от 1 до n
  for (let i = 1; i <= n; i++) {
    // Шаг 3: Проверяем делимость на 3 и 5 (должно быть первым)
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } 
    // Шаг 4: Проверяем делимость на 3
    else if (i % 3 === 0) {
      arr.push("Fizz");
    } 
    // Шаг 5: Проверяем делимость на 5
    else if (i % 5 === 0) {
      arr.push("Buzz");
    } 
    // Шаг 6: Иначе добавляем само число как строку
    else {
      arr.push(String(i));
    }
  }
  
  // Шаг 7: Возвращаем результат
  return arr;
};
