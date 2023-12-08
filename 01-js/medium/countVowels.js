/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  let charsInString = str.split("");
  let vowelCount = 0;
  for (let i = 0; i <= charsInString.length - 1; i++) {
    let vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(charsInString[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(countVowels("ajeet146442798298....aoeoeoeocbccbmq popoei"));
module.exports = countVowels;

/* 

1. convert chars of string into lowercase
2. split the string into each char ( in array)
3. initialise a var that counts vowel
4. start a loop that iterates whole array
5. check if arr[i] is a vowel
6. if yes, increase count by one
7. if no, pass
8. finally return the total count of vowels


*/
