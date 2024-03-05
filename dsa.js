// // Array Subset of another array

// Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m, where both arrays may contain duplicate elements. The task is to determine whether array a2 is a subset of array a1. It's important to note that both arrays can be sorted or unsorted. Additionally, each occurrence of a duplicate element within an array is considered as a separate element of the set.

// Example 1:

// Input:
// a1[] = {11, 7, 1, 13, 21, 3, 7, 3}
// a2[] = {11, 3, 7, 1, 7}
// Output:
// Yes
// Explanation:
// a2[] is a subset of a1[]

function isSubset(a1, a2, n, m) {
  //code here
  const map = new Map();
  for (let num of a1) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of a2) {
    if (!map.has(num) || map.get(num) === 0) {
      return "No";
    }
    map.set(num, map.get(num) - 1);
  }
  return "Yes"
}

console.log(isSubset([484, 595, 9595, 959, 5985], [959, 5985], 5, 2));
