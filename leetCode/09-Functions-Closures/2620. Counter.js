// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

// ============================================
// РЕШЕНИЕ:
// Используем замыкание (closure) для хранения состояния счетчика.
// Внешняя функция создает переменную count, внутренняя функция возвращает
// текущее значение и увеличивает его (постфиксный инкремент).
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(1) - каждая операция константная
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - храним только одну переменную
// ============================================

var createCounter = function(n) {
  // Шаг 1: Сохраняем начальное значение n в переменной count
  let count = n;
  
  // Шаг 2: Возвращаем функцию, которая использует замыкание
  return function() {
      // Шаг 3: Возвращаем текущее значение count и увеличиваем его
      // Постфиксный инкремент: сначала возвращаем, потом увеличиваем
      return count++;
  };
};