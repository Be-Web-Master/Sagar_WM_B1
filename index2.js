// // console.log("22");
// Move multiple of 2 in left side and multiple of 3 on right side, the numbers which are divisible by both or not divisible by any of them should be removed from array.
// const arr = [9,4,6,2,7,12,14,21]
// num1 = 2
// num2 = 3
// output - [4,2,14,9,21]
// function findElemenetsDivisibleBy(arr. num1, num2) - this function will return array

function findElemenetsDivisibleBy(arr, num1, num2) {
  arr.sort();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 2 == 0) {
      arr[i] = 0;
    } else if (arr[i] % 2 == 0) {
      result.unshift(arr[i]);
    } else if (arr[i] % 3 == 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
const arr = [9, 4, 6, 2, 7, 12, 14, 21];
const num1 = 2;
const num2 = 3;
// output - [4,2,14,9,21]

console.log(findElemenetsDivisibleBy(arr, num1, num2));
