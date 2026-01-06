// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.
 

// Constraints:

// 1 <= millis <= 1000

// ============================================
// РЕШЕНИЕ:
// Создаем Promise, который разрешается через millis миллисекунд с помощью setTimeout.
// Используем async/await для ожидания завершения Promise.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(1) - создание Promise и setTimeout
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - не используем дополнительную память
// ============================================

async function sleep(millis) {
  // Шаг 1: Создаем новый Promise, который разрешится через millis миллисекунд
  // Шаг 2: setTimeout вызывает resolve после указанного времени
  await new Promise((res) => setTimeout(res, millis));
  
  // Шаг 3: После завершения await функция завершается
}
