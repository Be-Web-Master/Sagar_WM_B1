// console.log("hhh");
// Write a function to remove all the numbers which divides the given number
// const arr = [2,3,5,6,7,9]
// const num = 60
// function removeAllDivisibleNumbers(arr) - this function will return array of numbers which cannot divide given number
// output - [7,9]

function removeAllDivisibleNumbers(arr, num) {
  let brr = [];
  for (let i = 0; i < arr.length; i++) {
    if (num % arr[i] !== 0) {
      brr.push(arr[i]);
    }
  }
  return brr;
}
const arr = [2, 3, 5, 6, 7, 9];
const num = 60;

console.log(removeAllDivisibleNumbers(arr, num));
