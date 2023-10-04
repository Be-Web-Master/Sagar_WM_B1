// console.log("44");
// Find frequency of all dublicate elements
// const arr = [1,1,2,3,3,3,4,5,5,5,5]
// function findDublicatesFrequency(arr) - this function will return object with frequency
// output - { 1:2, 3:3, 5:4 }

function findDublicatesFrequency(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else obj[arr[i]] = 1;
  }
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) delete obj[key];
  }

  return obj;
}

const arr = [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5];
const output = findDublicatesFrequency(arr);

console.log(output);
