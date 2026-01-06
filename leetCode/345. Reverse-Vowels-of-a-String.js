// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

// ============================================
// РЕШЕНИЕ:
// Используем технику двух указателей. Находим гласные слева и справа,
// меняем их местами. Продолжаем пока указатели не встретятся.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по строке
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - для хранения массива символов
// ============================================

var reverseVowels = function(s) {
  // Шаг 1: Создаем Set для быстрой проверки гласных
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Шаг 2: Преобразуем строку в массив символов
  const stringArr = [...s];

  // Шаг 3: Инициализируем два указателя
  let left = 0;
  let right = stringArr.length - 1;

  // Шаг 4: Продолжаем пока указатели не встретятся
  while (left < right) {
    // Шаг 5: Пропускаем негласные символы слева
    while (left < right && !vowels.has(stringArr[left])) {
      left++;
    }

    // Шаг 6: Пропускаем негласные символы справа
    while (left < right && !vowels.has(stringArr[right])) {
      right--;
    }

    // Шаг 7: Если нашли пару гласных, меняем их местами
    if (left < right) {
      [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]];
      left++;
      right--;
    }
  }

  // Шаг 8: Возвращаем строку из массива
  return stringArr.join('');
};

reverseVowels('hello')
console.log(reverseVowels('hello'))
