// Палиндром
// Напишите функцию isPalindrome, которая проверяет, является ли заданная строка палиндромом.
// Палиндромом считается строка, которая одинаково читается как слева направо, так и справа налево,
// при этом игнорируются пробелы, знаки препинания и регистр символов.

// Формат ввода
// На вход подаётся строка, которая может содержать буквы английского алфавита, цифры, пробелы и специальные символы

export function isPalindrome(str) {
  const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleanString.length - 1;

  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Временная сложность: O(n)

// toLowerCase(): O(n)
// replace(): O(n)
// Цикл while: O(n/2) = O(n) - проходит максимум половину строки
// Итого: O(2.5n) = O(n)

// Пространственная сложность: O(n)
// cleanString: O(n) - основная память для очищенной строки
// Переменные left, right: O(1) - константная память
// Итого: O(n)

console.log(isPalindrome("Do geese see God?")); // true
console.log(isPalindrome("Hello, world!")); // false
console.log(isPalindrome("Madam, I’m Adam")); // true

// Формат вывода
// Верните true, если строка s является палиндромом, иначе — false