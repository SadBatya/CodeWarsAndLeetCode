// Разбитие строк по разделителю
// Ограничение времени 1 с
// Ограничение памяти 64.0 Мб
// Необходимо написать функцию, которая разделит каждую строку в массиве words по строке separator.
// Необходимо вернуть массив получившихся после разделения строк, исключая пустые строки

// Формат ввода
// Вы должны экспортировать функцию splitWordsBySeparator, которая принимает на вход два аргумента:

// words — массив строк, которые нужно разбить. Длина массива не превышает
// separator — строка-разделитель, может иметь произвольную длину

// N1 - Решение которое проходит на литкоде, но не проходит на платформе яндекс контеста
// Причина в длине разделителя
export const splitWordsBySeparator = (words, separator) => {
  if (!separator) return words;

  const result = [];

  for (let word of words) {
    if (word !== "") {
      const wordArr = word.split(separator);
      result.push(...wordArr);
    }
  }

  return result.filter((str) => str !== "");
};

// N2 - Мое решение не самое оптимальное и оно проходит не все тесты
// export const splitWordsBySeparator = (words, separator) => {
//   if(!separator) return words

//   const result = [];

//   for (let word of words) {
//     const cleanWord = word.split("");
//     let resultWord = "";

//     cleanWord.forEach((char) => {
//       if (char === separator) {
//         if (resultWord.length > 0) {
//           result.push(resultWord);
//         }
//         resultWord = "";
//       } else {
//         resultWord += char;
//       }
//     });

//     if (resultWord.length > 0) {
//       result.push(resultWord);
//     }
//   }

//   return result;
// };

// N3 - Оптимальное решение, которое проходит тесты яндекс контеста
// export const splitWordsBySeparator = (words, separator) => {
//     const result = []; // 1. Создаем массив для результатов
//     const sepLength = separator.length; // 2. Запоминаем длину разделителя

//     for (const word of words) { // 3. Итерируем по всем словам в массиве
//         if (word.length === 0) continue; // 4. Пропускаем пустые строки

//         let start = 0; // 5. Указатель начала текущей подстроки
//         let pos = word.indexOf(separator, start); // 6. Ищем первое вхождение разделителя

//         while (pos !== -1) { // 7. Пока находим разделители в строке

//             if (pos > start) { // 8. Если между разделителями есть непустая подстрока
//                 result.push(word.substring(start, pos)); // 9. Добавляем её в результат
//             }
//             start = pos + sepLength; // 10. Сдвигаем указатель за разделитель
//             pos = word.indexOf(separator, start); // 11. Ищем следующий разделитель
//         }

//         if (start < word.length) { // 12. После последнего разделителя осталась подстрока
//             result.push(word.substring(start)); // 13. Добавляем оставшуюся часть
//         }
//     }

//     return result; // 14. Возвращаем результат
// };

// Анализ сложности
// Временная сложность: O(n × m)
// n - количество строк в массиве words
// m - средняя длина строки

// Для каждой строки выполняем операцию разделения (O(m))

// Пространственная сложность: O(n × m)
// Храним результат разделения всех строк

// В худшем случае, если разделитель встречается часто, результат может быть сравним по размеру с входными данными

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
console.log(splitWordsBySeparator(["1/", "/2", "/"], "/"));
console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], ""));

// separator — строка-разделитель, может иметь произвольную длину

// Формат вывода
// Функция должна возвращать массив строк, который является результатом выполнения "разделения". Он не должен содержать пустых строк
