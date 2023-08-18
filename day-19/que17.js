// Write a function that takes a positive integer as input and returns the sum of its digits each raised to the power of the number of digits in the original integer.

console.log(sumOfDigitsToPower(123));
function sumOfDigitsToPower(n) {
  let count = 0;
  let temp = n * 10;
  let sum = 0;
  for (let i = 0; i <= temp; i++) {
    ++count;
    temp = Math.trunc(temp / 10);
  }
  
}
