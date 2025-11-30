// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

export const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);

    result = Math.max(result, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};
