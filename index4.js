// Running Sum
// const arr = [11, 20, 3, 14, 50, 9]
// output - [ 11, 31, 34, 48, 98, 107 ]
// constraint - avoid nested loops
// function findRunningSum(arr) - this function will return an array which at every index has sum of all the numbers starting from 0 to that index

function findRunningSum(arr) {
  let sum = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    result.push(sum);
  }
  return result;
}

const arr = [11, 20, 3, 14, 50, 9];
// output - [ 11, 31, 34, 48, 98, 107 ]
const output = findRunningSum(arr);
console.log(output);
