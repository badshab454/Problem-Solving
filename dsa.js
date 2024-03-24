function isPerfect(n, arr) {
  // code here
  let num = arr.join('');
  let reversedNum = arr.reverse().join('');
  return reversedNum === num;
}

console.log(isPerfect(5, [1, 2, 3, 2, 1]));