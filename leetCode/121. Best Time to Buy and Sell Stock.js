// 121. Best Time to Buy and Sell Stock
// Easy
// Topics
// premium lock icon
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// ============================================
// РЕШЕНИЕ:
// Используем технику двух указателей. Один указатель (buy) указывает на день покупки,
// другой (sell) проходит по массиву. Если цена в день sell больше цены в день buy,
// вычисляем прибыль и обновляем максимум. Если цена в день sell меньше, обновляем buy.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по массиву
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(1) - используем только константное количество переменных
// ============================================

var maxProfit = function (prices) {
  // Шаг 1: Указатель на день покупки (начинаем с первого дня)
  let buy = 0;
  // Шаг 2: Максимальная прибыль (изначально 0)
  let maxProfit = 0;

  // Шаг 3: Проходим по всем дням начиная со второго
  for (let sell = 1; sell < prices.length; sell++) {
    // Шаг 4: Если цена в день sell больше цены в день buy
    if (prices[sell] > prices[buy]) {
      // Шаг 5: Вычисляем прибыль и обновляем максимум
      maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
    } else {
      // Шаг 6: Если цена упала, обновляем день покупки (покупаем дешевле)
      buy = sell;
    }
  }

  // Шаг 7: Возвращаем максимальную прибыль
  return maxProfit;
};
