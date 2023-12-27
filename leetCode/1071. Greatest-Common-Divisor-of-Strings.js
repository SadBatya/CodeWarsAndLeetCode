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


var gcdOfStrings = function(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  // Find the greatest common divisor
  let divisor = 1;
  for (let i = 1; i <= len1 && i <= len2; i++) {
    if (len1 % i === 0 && len2 % i === 0) {
      divisor = i;
    }
  }

  // Check if the substring up to the divisor is the common factor
  const commonSubstring = str1.substring(0, divisor);
  if (str1 + str2 === str2 + str1) {
    return commonSubstring;
  } else {
    return '';
  }
};