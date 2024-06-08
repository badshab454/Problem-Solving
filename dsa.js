// 189. Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
      result[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; i++) {
      nums[i] = result[i];
    }
    return nums;
  }

console.log(rotate([1,2,3,4,5,6,7], 3));