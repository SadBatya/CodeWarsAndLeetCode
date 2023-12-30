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


let reverseVowels = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

  const stringArr = [...s]

  let left = 0;
  let right = stringArr.length - 1


  while(left < right){
    while(left  < right && !vowels.has(stringArr[left])){
      left++
    }

    while(left < right && !vowels.has(stringArr[right])){
      right--
    }

    if(left < right){
      [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]]
      left++;
      right--
    }
  }

  return stringArr.join('')
};

reverseVowels('hello')
console.log(reverseVowels('hello'))
