//is same for last number

function isSame(s) {
  //code here
  let str = "";
  let numStr = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      numStr += s[i];
    } else {
      str += s[i];
    }
  }
  return parseInt(numStr) == str.length ? 1 : 0;
}

console.log(isSame("gypgqgraaaa011"));
