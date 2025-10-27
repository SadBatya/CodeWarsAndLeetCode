// Дан массив целых чисел и целое число k. Нужно определить,
// есть ли в массиве два числа, сумма которых равна k .

// Пример:

// Вход: nums = [10, 15, 3, 7], k = 17

// Выход: True

// Примечание
// В качестве решения предоставьте функцию следующего вида:

// /** @returns Boolean */
// module.exports = function(nums, k) {
//     // ваш код здесь
// }

// Первое решение:

// const sumTwoNumbers = (nums, k) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === k) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// Второе решение

const sumTwoNumbers = (nums, k) => {
  const complimentSet = new Set();

  for (let num of nums) {
    if (complimentSet.has(num)) return true;
    complimentSet.add(k - num);
  }

  return false;
};

console.log(sumTwoNumbers([10, 15, 3, 7], 17));
console.log(sumTwoNumbers([10, 15, 3, 7], 32));
