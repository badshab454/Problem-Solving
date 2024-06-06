// 2535. Difference Between Element Sum and Digit Sum of an Array
// Example 1:

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
``
var differenceOfSum = function(nums) {
  let elementSum = nums.reduce((a, b) => Number(a) + Number(b));
  let digitArr = nums.join('').split('');
  let digitSum = digitArr.reduce((c, d) => Number(c) + Number(d));
  return elementSum >= digitSum ? elementSum - digitSum : digitSum - elementSum; 
};

console.log(differenceOfSum([1,15,6,3]));