// Find duplicates in an array

// Example 1:

// Input:
// N = 4
// a[] = {0,3,1,2}
// Output:
// -1
// Explanation:
// There is no repeating element in the array. Therefore output is -1.
// Example 2:

// Input:
// N = 5
// a[] = {2,3,1,2,3}
// Output:
// 2 3
// Explanation:
// 2 and 3 occur more than once in the given array.

function duplicates(a, n) {
  //your code here
  let result = [];
    let count = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        count[a[i]]++;
    }

    for (let i = 0; i < n; i++) {
        if (count[i] > 1) {
            result.push(i);
        }
    }

    return result.length > 0 ? result : [-1];
  
}

console.log(duplicates([1, 1, 1, 2, 2, 4], 6));
