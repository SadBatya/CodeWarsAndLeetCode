// 2667. Create Hello World Function
// Solved
// Easy
// Companies
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".

// ============================================
// РЕШЕНИЕ:
// Используем замыкание. Внешняя функция возвращает внутреннюю функцию,
// которая игнорирует все аргументы и всегда возвращает "Hello World".
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(1) - константное время
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - не используем дополнительную память
// ============================================

var createHelloWorld = function() {
  // Шаг 1: Возвращаем функцию, которая принимает любое количество аргументов
  return function(...args) {
      // Шаг 2: Всегда возвращаем "Hello World", игнорируя аргументы
      return 'Hello World';
  };
};