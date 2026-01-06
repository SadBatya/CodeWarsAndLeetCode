// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

// ============================================
// РЕШЕНИЕ:
// Находим НОД длин строк. Если str1 + str2 === str2 + str1, значит строки
// имеют общий делитель. Возвращаем подстроку длиной НОД от начала str1.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(min(len1, len2)) - для поиска НОД
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(len1 + len2) - для конкатенации строк
// ============================================

var gcdOfStrings = function(str1, str2) {
  // Шаг 1: Получаем длины строк
  const len1 = str1.length;
  const len2 = str2.length;

  // Шаг 2: Находим наибольший общий делитель длин строк
  let divisor = 1;
  for (let i = 1; i <= len1 && i <= len2; i++) {
    if (len1 % i === 0 && len2 % i === 0) {
      divisor = i;
    }
  }

  // Шаг 3: Берем подстроку длиной НОД от начала str1
  const commonSubstring = str1.substring(0, divisor);
  
  // Шаг 4: Проверяем, является ли эта подстрока общим делителем
  // Если str1 + str2 === str2 + str1, значит строки имеют общий делитель
  if (str1 + str2 === str2 + str1) {
    return commonSubstring;
  } else {
    return '';
  }
};