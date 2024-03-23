// 724. Find Pivot Index
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

const numsArray = [1, 7, 3, 6, 5, 6];
const numsArray2 = [1,2,3,4,5,10]

function findPivotIndex(array) {
  // возможно, вы бы захотели решить эту задачу двойным циклом
  // я тоже так хотел:D 
  // но не стоит забывать про сложность выполнения операции двойного цикла
  // каждый раз повторять одни и те же действия будет сложность O(n2)
  
  // а что если изначально мы возьмем и получим сумму чисел в массиве
  // и от нее уже будет отталкиваться

  // создаем переменную суммы чисел массива

  const totalSum = array.reduce((sum, current) => sum + current, 0) 

  // и давайте проверим и выведем в консоль правильно ли возвращается результат суммы чисел в массиве
  // return totalSum (28, все работает)

  // теперь нам нужна переменная которая будет хранить сумму чисел левой части
  // а как будем складывать туда эти числа?
  // кажду итерацию цикла мы будем прибавлять к сумме последующее число
  // но так как мы только стартуем левая часть массива будет равна 0
  let leftTotal = 0


  // а вот теперь уже можно начинать использовать цикл for
  for(let i = 0; i < array.length; i++){
    // теперь находим тут наше число, которое будет делить наш массив на две части
    let findPivotElement = array[i]

    // теперь у нас есть сумма всех чисел массива выше
    // у нас есть число которое делит на две части
    // чтобы найти левую и правую часть вот тут надо подумать
    // левая часть сумма у нас есть
    // а чтобы вычислить правую часть и сравнить
    // нам надо отнять от общей суммы чисел левую часть и число, которое делит массив на две части

    let rightTotal = totalSum - leftTotal - array[i]

    // теперь проводим сравнение левой и правой части
    // если они равны возвращаем индес
    if(leftTotal === rightTotal){
      return i
    }
    //если не равны, прибавляем к левой части сумму числа и продолжаем цикл
    leftTotal += findPivotElement;

  }
  
  // если же в массиве равных частей нет, значит возвращаем -1
  return -1
}

console.log(findPivotIndex(numsArray)) // 3
console.log(findPivotIndex(numsArray2)) // 4


// вот сама функция без комментариев

function findPivotIndex2(nums){
  const totalSum = nums.reduce((sum, current) => sum + current, 0) 
  let leftTotal = 0
  
  for(let i = 0; i < nums.length; i++){
    let findPivotElement = nums[i]
    let rightTotal = totalSum - leftTotal - nums[i]

    if(leftTotal === rightTotal){
      return i
    }

    leftTotal += findPivotElement;
  }
  
  return -1
}