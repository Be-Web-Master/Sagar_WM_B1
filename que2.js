// Find the majority element in the array
// function findMajorityElement(arr) - this function will return first majority element from an array
// const arr= [3, 3, 4, 2, 4, 4, 2, 4, 4]
// output - 4

// const arr = [1,1,1,3,3,3,2,2]
// output - 1

const findMajorityElement = (arr) => {
  arr.sort();
  let count = 0;
  let max = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[start]) {
      ++count;
    } else if (arr[i] !== arr[start]) {
      ++start;
    }
    // if (count <= max) {
    //   max = count;
    //   console.log("ll");
    // }
  }
  //   return max;
};
const arr = [1, 1, 1, 3, 3, 3, 2, 2];
// const arr= [3, 3, 4, 2, 4, 4, 2, 4, 4]

console.log(findMajorityElement(arr));
