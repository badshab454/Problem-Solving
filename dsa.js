// Given an array of N distinct elements, the task is to find all elements in array except two greatest elements in sorted order.
// Example 1:
// Input : 
// a[] = {2, 8, 7, 1, 5}
// Output :
// 1 2 5 
// Explanation :
// The output three elements have two or
// more greater elements.   


function findElements(arr,n){
    //code here
    let sortedArr = arr.sort((a, b) => a - b);
    sortedArr.pop();
    sortedArr.pop();
    return sortedArr;
 }

console.log(findElements([10, 11, 4]));

