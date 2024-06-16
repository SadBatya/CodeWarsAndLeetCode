// 1456. Maximum Number of Vowels in a Substring of Given Length
// Medium
// Topics
// Companies
// Hint
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.


// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.


var maxVowels = function(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxCount = 0;
  let currentCount = 0;

  // Первоначально подсчитываем количество гласных в первом окне
  for (let i = 0; i < k; i++) {
      if (vowels.has(s[i])) {
          currentCount++;
      }
  }

  // Устанавливаем maxCount как начальное количество гласных
  maxCount = currentCount;

  // Сдвигаем окно по строке, начиная с индекса k
  for (let i = k; i < s.length; i++) {
      // Убираем левую границу окна
      if (vowels.has(s[i - k])) {
          currentCount--;
      }
      // Добавляем правую границу окна
      if (vowels.has(s[i])) {
          currentCount++;
      }
      // Обновляем максимальное количество гласных
      maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
};
