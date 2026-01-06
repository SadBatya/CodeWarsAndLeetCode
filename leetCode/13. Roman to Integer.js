// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// ============================================
// РЕШЕНИЕ:
// Проходим по строке слева направо. Если текущий символ меньше следующего,
// значит это случай вычитания (например, IV = 4, где I < V).
// В этом случае вычитаем текущее значение и пропускаем следующий символ.
// Иначе просто добавляем значение текущего символа.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по строке
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var romanToInt = function(s) {
  // Шаг 1: Создаем объект с соответствием римских цифр и их значений
  const symbols = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }

  // Шаг 2: Инициализируем результат
  let result = 0;

  // Шаг 3: Проходим по строке
  for(let i = 0; i < s.length; i++){
      // Шаг 4: Получаем значение текущего символа
      const currentNum = symbols[s[i]]
      // Шаг 5: Получаем значение следующего символа (если есть)
      const nextNum = symbols[s[i + 1]]

      // Шаг 6: Если текущее значение меньше следующего - это случай вычитания
      if(currentNum < nextNum){
          // Шаг 7: Вычитаем из следующего текущее (например, IV = 5 - 1 = 4)
          result += nextNum - currentNum
          // Шаг 8: Пропускаем следующий символ, так как уже обработали
          i++
      } else {
          // Шаг 9: Иначе просто добавляем значение текущего символа
          result += currentNum
      }
  }

  // Шаг 10: Возвращаем результат
  return result
};