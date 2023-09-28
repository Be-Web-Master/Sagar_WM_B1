console.log("11111");

// Find the first missing number in the sorted array
// function findFirstMissingNumber(arr) - this function will return the first first number, if we don't have any missing number then return the last expected number
// const arr = [4,5,8,9,10]
// output - 6

// const arr = [11,12,13,14,15]
// output - 16

const findFirstMissingNumber = (arr) => {
  arr.sort((a, b) => a - b);
  let start = arr[0];
  let count = 0
  for (let i = 0; i < arr.length; i++) {
      if (start!==arr[i]) {
        return  start
      }
      ++start
  }
  return arr[arr.length-1]+1

  console.log({ arr: arr });
};

// const arr = [4, 5, 8, 9, 10];
const arr = [11,12,13,15]
console.log(findFirstMissingNumber(arr));
