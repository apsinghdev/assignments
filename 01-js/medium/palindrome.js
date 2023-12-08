/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let result = false;
  if (str.length === 0 || str.length === 1) {
    result = true;
  } else {
    let charactersOnly = str.match(/[a-z]/gi);
    let indexes = charactersOnly.length - 1;
    for (let i = 0; i <= indexes; i++) {
      if (charactersOnly[i] === charactersOnly[indexes - i]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
}

module.exports = isPalindrome;
