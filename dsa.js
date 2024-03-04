// Input:
// n = 5
// k = 16
// arr = {9, 7, 2, 16, 4}
// Output: 4


function search(n, k, arr) {
  // code here
  let plusK = arr.indexOf(k) + 1;
  return plusK === 0 ? -1 : plusK;
}

console.log(search(5, 16, [9, 7, 2, 16, 4]));