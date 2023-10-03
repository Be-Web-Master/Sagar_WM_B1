// Write a function to get the pair which have maximum sum
// const arr = [2,3,11,5,7,9]
// function getMaxPair(arr) - this function will return the pairs which have maxium sum
// output - [11, 9]
// 11 + 9 = 20 are the pairs which have maximum sum

function getMaxPair(arr) {
  arr.sort((a, b) => a - b);
  let first = arr[arr.length - 1];
  let second = 0;
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (first !== arr[i]) {
      return [first, (second = arr[i])];
    }
  }
}
const arr = [2, 3, 11, 5, 7, 9];

console.log(getMaxPair(arr));
