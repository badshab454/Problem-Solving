//valid palindrome`

var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let revStr = str.split("").reverse().join("");
  return str === revStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
