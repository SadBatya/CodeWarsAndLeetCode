// 2623. Memoize
// Solved
// Medium
// premium lock icon
// Companies
// Hint
// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a 
// value has already been cached for the arguments (b, a) where a != b, 
// it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

// ============================================
// РЕШЕНИЕ:
// Используем Map для кэширования результатов. Ключ - сериализованные аргументы,
// значение - результат вызова функции. Если результат уже есть в кэше,
// возвращаем его, иначе вычисляем, сохраняем и возвращаем.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(1) для кэшированных вызовов, O(fn) для новых вызовов
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) где n - количество уникальных комбинаций аргументов
// ============================================

function memoize(fn) {
  // Шаг 1: Создаем Map для хранения кэшированных результатов
  const cache = new Map();

  // Шаг 2: Возвращаем мемоизированную версию функции
  return function (...args) {
    // Шаг 3: Создаем ключ из аргументов (сериализуем в строку)
    const key = JSON.stringify(args);

    // Шаг 4: Проверяем, есть ли результат в кэше
    if (cache.has(key)) {
      // Шаг 5: Если есть, возвращаем кэшированное значение
      return cache.get(key);
    }

    // Шаг 6: Если нет, вызываем исходную функцию
    const result = fn.apply(this, args);
    
    // Шаг 7: Сохраняем результат в кэш
    cache.set(key, result);
    
    // Шаг 8: Возвращаем результат
    return result;
  };
}

// Example 1:

// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2
// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2
