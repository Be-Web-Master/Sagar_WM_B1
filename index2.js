// Write a function to find unique elements without using an set and map, do it O(n), do not use nested loops
// const arr = [1,1,2,3,4,4,4,5,6,6,7]
// output - [2,3,5,7]
// function getUniqueNumbers(arr) - this function will return array of unique numbers in O(n)

const arr = [1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 7];
// output - [2,3,5,7]
function getUniqueNumbers(arr) {
  const obj = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let count = 0;
  for (const key in obj) {
    if (obj[key] == 1) {
      result[count] = Number(key);
      count++;
    }
  }
  return result;
}
console.log(getUniqueNumbers(arr));
