function plusOne(digits) {
    let num = BigInt(digits.join(''));
    num = num + BigInt(1);
    let result = num.toString().split("")
    return result;
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));