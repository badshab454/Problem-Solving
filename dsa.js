// Remove character
// string1 = "computer"
// string2 = "cat"
// Output: "ompuer"
// Explanation: After removing characters(c, a, t)
// from string1 we get "ompuer".

// let result = '';
//     for (let i = 0; i < str1.length; i++) {
//         if (!str2.includes(str1[i])) {
//             result += str1[i];
//         }
//     }
//     return result;

function removeChars(s1, s2){
  //code here
  let result = '';
  for (let i = 0; i < s1.length; i++){
    if (!s2.includes(s1[i])){
      result += s1[i];
    }
  }
  return result;
}

console.log(removeChars("computer", "cat"));

