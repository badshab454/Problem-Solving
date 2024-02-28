//Count of camel case characters

var isPalindrome = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      result += s[i];
    }
  }
  return result.length;
};

console.log(isPalindrome("AbdBCc"));
