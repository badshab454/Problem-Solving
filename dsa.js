// 9. Palindrome Number

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:`

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function isPalindrome (x) {
    let arr = x.toString().split('').reverse().join('')
    let revNum = parseInt(arr);
    return x == revNum;
}

console.log(isPalindrome(123));