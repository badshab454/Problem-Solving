// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

function reverseCase(x) {
    // Example 1:

    // Input: x = 121
    // Output: true
    let num = x.toString().split("").reverse().join("");
    let revNum = parseInt(num);

    return revNum == x ? true : false;
}
console.log(reverseCase(123));