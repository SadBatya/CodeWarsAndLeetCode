// 2704. To Be Or Not To Be
// Easy
// Companies
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// ============================================
// РЕШЕНИЕ:
// Используем замыкание для сохранения исходного значения. Возвращаем объект
// с двумя методами: toBe (проверка равенства) и notToBe (проверка неравенства).
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(1) - константное время для сравнения
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var expect = function(val) {
  // Шаг 1: Возвращаем объект с методами для тестирования
  return {
      // Шаг 2: Метод для проверки равенства (строгое сравнение ===)
      toBe: (v) => {
          if (v === val) {
              // Шаг 3: Если значения равны, возвращаем true
              return true;
          } else {
              // Шаг 4: Если не равны, выбрасываем ошибку
              throw new Error('Not Equal');
          }
      },
      // Шаг 5: Метод для проверки неравенства
      notToBe: (v) => {
          if (v !== val) {
              // Шаг 6: Если значения не равны, возвращаем true
              return true;
          } else {
              // Шаг 7: Если равны, выбрасываем ошибку
              throw new Error('Equal');
          }
      }
  };
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));

