// 209. Minimum Size Subarray Sum
// Medium
// Topics
// Companies
// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

var minSubArrayLen = function(target, nums) {
    let minLength = Infinity; // Устанавливаем начальное значение для минимальной длины
    let start = 0;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]; // Увеличиваем текущую сумму
        
        // Проверяем, если текущая сумма больше или равна целевой
        while (currentSum >= target) {
            // Обновляем минимальную длину
            minLength = Math.min(minLength, i - start + 1);
            // Уменьшаем текущую сумму, сдвигая начальный указатель
            currentSum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};

// Примеры вызова функции
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 0

