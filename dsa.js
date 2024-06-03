// 2710. Remove Trailing Zeros From a String
// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.
// Example 1:
// Input: num = "51230100"
// Output: "512301"


var removeTrailingZeros = function(num) {
    let lastNonZeroIndex = -1;
    //travers from the end to the beginning of the string
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] !== '0') {
            lastNonZeroIndex = i;
            break;
        }
    }
    //if all characters are zero, return 0;
    return num.slice(0, lastNonZeroIndex + 1);
    // return the substring from the start to the position of the last non-zero character
    
};

console.log(removeTrailingZeros("51230100"));



