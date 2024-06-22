// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]


var merge = function(nums1, m, nums2, n) {
  let j = 0;
  for (let i = nums1.length; i >= m; i--) {
    if (nums1[i] == '0') {
      nums1.splice(i, 1);
      nums1.push(nums2[j]);
      j++;
    }
  }
  return nums1.sort();
};


console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
