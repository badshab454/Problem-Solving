//Reverse words in a given string

//vvvvvvvInput:
// S = i.like.this.program.very.much
// Output: much.very.program.this.like.i

function reverseWords(s) {
  // code here
  return s.split('.').reverse().join(".");
}

console.log(reverseWords("i.like.this.program.very.much"));
