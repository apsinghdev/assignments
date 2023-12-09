/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let result = true;
  let Arr1 = str1.split("");
  let Arr2 = str2.split("");
  // write a logic to return false if length of the strings is not same
  if (!(Arr1.length === Arr2.length)) {
    result = false;
  } else {
    for (let i = 0; i < Arr2.length; i++) {
      if (!Arr1.includes(Arr2[i])) {
        result = false;
      } else {
        result = true;
      }
    }
  }
  return result;
}

console.log(isAnagram("abc", "bcaa"));
module.exports = isAnagram;
