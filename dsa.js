// 1287. Element Appearing More Than 25% In Sorted Array
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
// Example 1:
// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:
// Input: arr = [1,1]
// Output: 1

var findSpecialInteger = function(arr) {
    let n = arr.length; 
    let quarter = n  / 4;
    let count = 1;
    for (let i = 0; i < n; i++) {
        if (arr[i] == arr[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count > quarter) {
            return arr[i];
        }
    }
    return arr[0];
};

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));



