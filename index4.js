console.log("4------4");
// Find string with given prefix - do not use built-in method
// function getStringByPrefix(arr) - this function will return all the string which have given prefix
// arr - [abc, bcd, bc, abcd, abb, acbds, ceab, abds]
// const prefix ="ab"
// output - [abc, abcd, abb, abds]

function getStringByPrefix(arr) {
  let brr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == "a" && arr[i][1] == "b") {
      brr.push(arr[i]);
    }
  }
  return brr;
}

const arr = ["abc", "bcd", "bc", "abcd", "abb", "acbds", "ceab", "abds"];

const prefix = "ab";

console.log(getStringByPrefix(arr));
// output - [abc, abcd, abb, abds]
