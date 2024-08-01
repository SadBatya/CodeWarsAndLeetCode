// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"


function freqSeq(str, sep) {
  // Подсчитываем количество вхождений каждого символа в строке
   const charCount = {};
   for (const char of str) {
     if (charCount[char]) {
       charCount[char]++;
     } else {
       charCount[char] = 1;
     }
   }
 
   // Формируем новую строку с подсчетами, разделенными заданным разделителем
   const result = [];
   for (const char of str) {
     result.push(charCount[char]);
   }
 
   return result.join(sep);
 }
 