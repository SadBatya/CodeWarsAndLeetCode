let nums1 = [1, 4, 5, 7];
let nums2 = [2, 3, 7];


var findDifference = function (nums1, nums2) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !arr1.includes(nums1[i]) && arr1.length < 2) {
      arr1.push(nums1[i]);
    }
    if (arr1.length === 2) break;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !arr2.includes(nums2[i]) && arr2.length < 2) {
      arr2.push(nums2[i]);
    }
    if (arr2.length === 2) break;
  }

  return [arr1, arr2];
};


// второй вариант решения задачи
var findDifference = function(nums1, nums2) {
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);

  let ans1 = Array.from(s1).filter(x => !s2.has(x));
  let ans2 = Array.from(s2).filter(x => !s1.has(x));

  return [ans1, ans2]
};

console.log(findDifference(nums1, nums2));
// Output: [[1, 3], [4, 6]]


console.log(findDifference(nums1, nums2));
