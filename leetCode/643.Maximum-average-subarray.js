// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

function maximumAverage(nums, k) {
  // создаем переменную где мы будем хранить сумму первых четырех числе массива
  // дальше от нее уже будет отталкиваться
  let sum = 0;

  // запускам цикл и постепенно сдвигаем второй показатель нашего окна
  // и доходим до предела когда k будет равно индексу i
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  // затем создаем вторую переменную, где мы будем хранить результат
  // и потом сранивать эти два значение чтобы вывести большее
  let res = sum;

  // запускаем второй цикл в котором начнем сдвигать наше окно
  // для этого мы можем первое число в окне отнимать от суммы
  // так как оно выходит из нашего окна
  // и прибавлять следующее число которое заходит в окно
  // принцип тут будет что всегда мы отнимаем выходящее число
  // и прибавляем приходящее
  for (i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];

    // а тут мы каждый цикл сраниваем с прошлым числом и выкидываем меньшее
    res = Math.max(res, sum);
  }

  // после цикла по условию задачи нам надо разделить это большее число на k
  return res / k
}


let nums = [1,12,-5,-6,50,5]
let k = 4

// вызываем функцию и передаем ей аргументы
maximumAverage(nums, k) 
console.log(maximumAverage(nums, k)) // 12.75

