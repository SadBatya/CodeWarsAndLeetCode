// Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

let str = [17, 17, 3, 17, 17, 17, 17];

function stray(numbers) {
  const count = {};

  // Подсчитываем количество вхождений каждого числа
  for (const num of numbers) {
    count[num] = (count[num] || 0) + 1;
  }

  // Находим число, которое встречается только один раз
  for (const num in count) {
    if (count[num] === 1) {
      return parseInt(num);
    }
  }
}

console.log(stray(str));
