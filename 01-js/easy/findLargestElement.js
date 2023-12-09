/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    var largestNum = numbers[0];
    if(numbers.length === 0){
        largestNum = undefined;
    } else{
       for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] > largestNum) {
           largestNum = numbers[i];
         }
       }
    }
    
    return largestNum;
}
console.log(findLargestElement([-3.5, -7.2, -2.1, -9.8, -1.9]));
module.exports = findLargestElement;