// First and last occurrences of X
// Example 1:

// Input:
// N = 4 , X = 3
// arr[] = { 1, 3, 3, 4 }
// Output:
// 1 2
// Explanation:
// For the above array, first occurence
// of X = 3 is at index = 1 and last
// occurence is at index = 2.

function firstAndLast(arr, N, X) {
  //your code here
  let firstIndex = arr.indexOf(X);
  let lastIndex = arr.lastIndexOf(X);

  if(firstIndex == -1 || lastIndex == -1) {
    return [-1]
  }

  return [firstIndex, lastIndex];
}

console.log(firstAndLast([0, 0, 0, 0, 1, 1, 1, 1], 8, 3));