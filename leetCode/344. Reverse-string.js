// 344. Reverse String
// while function that reverses the string in-place using two pointers
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const example1 = ["h", "e", "l", "l", "o"];

const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }

  return s;
};

console.log(reverseString(example1));
