// console.log("44");
// Find frequency of all dublicate elements
// const arr = [1,1,2,3,3,3,4,5,5,5,5]
// function findDublicatesFrequency(arr) - this function will return object with frequency
// output - { 1:2, 3:3, 5:4 }

function findDublicatesFrequency(arr) {
  const obj = {};
  let brr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        brr.push(arr[i]);
      }
    }
  }
  console.log(brr);
  //     for (let i = 0; i < arr.length; i++) {
  //         if (obj[arr[i]]) {
  //             obj[arr[i]]++
  //         } else obj[arr[i]]=1
  //     }

  // return obj
}

const arr = [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5];
const output = findDublicatesFrequency(arr);

console.log(output);
