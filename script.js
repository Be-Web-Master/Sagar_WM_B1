// Count the occurrences of a value in an array
// — create a function that takes 2 args: arr, value
// — this function returns a number, that is count of number of times the value has appeared in arr
// const arr = [2, 4, 5, 6, 4, 5, 6, 4, 4, 4, 4, 5];

// function isCount(arr, ele) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       count++;
//     } else if (count == 0) {
//       count = 0;
//     }
//   }
//   return count;
// arr.forEach(element => {
//     if (ele === element) {
//               count++;
//             } else if (count == 0) {
//               count = 0;
//             }

// });
// return count
//   for (const val of arr) {
//     if (ele === val) {
//       count++;
//     } else if (count == 0) {
//       count = 0;
//     }
//   }
//   return count
// }

// console.log(isCount(arr, 41));
// Get indices of all occurrences of a value in an array (almost polyfill of Array.prototype.findIndex)
// — create a function that takes 2 args: arr, value
// — this function returns a an array of numbers, where each number is the index position of the value in arr
// const arr = [2, 4, 5, 6, 4, 5, 6, 4, 4, 4, 4, 5];

// function isCount(arr,val) {
//     const newArr = [];

//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i]===val) {
//     //         newArr.push(i)
//     //     }
//     // }
//     // arr.forEach((ele,i) => {
//     //     if(ele===val) {
//     //         newArr.push(i)
//     //     }
//     // });

//     return newArr
// }
// console.log(isCount(arr,4));
// Get the unique values of an array
// — create a function that takes 2 args: arr
// — this function returns a new array of values from arr, only those which occur only once in that array

// let obj ={}
// let arr = [2, 4, 5, 6,2]
// // arr.forEach((ele) => obj[ele] = 1)
// // for (const ele of arr) {
// //     obj[ele]=1
// // }
// for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]]=1
// }

// console.log(Object.keys(obj));

// // 4
// Compare two Arrays (polyfill of Array.prototype.every)
// — create a function that takes 2 args: arr1, arr2
// — this function returns either true or false, if each element of both the arrays are equal with ===

// let arr = [1,2,3,4,5].sort((a,b)=>a-b)
// let newArr= [1,2,3,4,5].sort((a,b)=>a-b)
// // let check = false
// function every(arr,newArr) {
//     if(arr.length!==newArr.length) return false
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]!==newArr[i]) {
//             return false
//         }
//         return true
//     }
// }
// console.log(every(arr,newArr));

// 5
// Create an array of numbers in the given range
// — create a function that takes 3 args: startNum, endNum, steps
// — this function returns an array which has numbers from startNum, to endNum in steps.

// const isSteper = (startNum, endNum, steps) => {
//   let newArr = [];
//   for (let i = startNum; i <= endNum; i = i + steps) newArr.push(i);

//   return newArr;
// };
// console.log(isSteper(20, 100, 5));

// 6 Convert an array of objects to a single object of objects
// — create a function that takes 2 args: arran array of objects, keyName
// — this function returns an object: where value of one of the properties of the object is the key, and the entire object is the value.
// input array ===== [
// { id: ‘1’, name: ‘Alpha’, gender: ‘Male’ },
// { id: ‘2’, name: ‘Bravo’, gender: ‘Male’ },
// { id: ‘3’, name: ‘Charlie’, gender: ‘Female’ },
// ]
/*
output object ====== {
‘1’: { id: ‘1’, name: ‘Alpha’, gender: ‘Male’ },
‘2’: { id: ‘2’, name: ‘Bravo’, gender: ‘Male’ },
‘3’: { id: ‘3’, name: ‘Charlie’, gender: ‘Female’ },
}
*/

// const convertArrtoObj = (arr, keyName) => {
//   const result = {};
//   for (const obj of arr) {
//     const keyValue = obj[keyName];
//     result[keyValue] = obj;

//     // console.log(obj[keyName] + " keyValue=>" + keyName);
//   }
//   return result;
// };
// const arr = [
//   { id: "77", name: "Alpha", gender: "Male" },
//   { id: "88", name: "Bravo", gender: "Male" },
//   { id: "99", name: "Charlie", gender: "Feale" },
// ];

// console.log(convertArrtoObj(arr, "id"));

// 7
// Count the occurrences of all array elements (frequency counter)
// — create a function that takes 1 arg: arr array of random numbers or string
// — this function returns an object which has arr element as key, and it count as value.
// const arr = ["ritik","dhanoo", "ritik", "priyanshi", "ritik", "sagar", "ritik"];
// const frequencyCounter = (arr) => {
//   let obj = {};
//   arr.sort();
//   for (let i = 0; i < arr.length; i++) {
//       let count = 1;
//     console.log(obj.arr[i]);
//     // if(obj[arr[i]]==arr[i]){
//     //     obj[arr[i]] = ++count
//     //     console.log((obj[arr[i]]));
//     // }else obj[arr[i]] = count
//   }
// //   return obj;
// };
// console.log(frequencyCounter(arr));
// 8 Split an array into chunks
// — create a function that takes 2 args: arr, array of numbers or strings, chunkSize
// — this function returns an array of arrays where each array is of size equal to chunkSize

// 9
// Shuffle an array

// 10 Rotate an array by steps
// — create a function that takes 2 args: arr, array of numbers or strings, stepSize
// — this function returns same array: each value of the array shifted by stepSize
// function shuffleArray(arr) {
//   for (let i = 0; i > arr.length; i++) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
//   }
//   return arr;
// }

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(shuffleArray(inputArray));

// 11
// Remove duplicate values in an array
// const removeDuplicate = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result
// };
// console.log(removeDuplicate([1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7]));

// 12 Find the length of the longest string in an array
// const arr = ["dhanoo", "ritik", "priyanshi", "sagar"];

// const findLongestString = (arr) => {
//   let max = 0;
//   let result = ''
//   for (let i = 0; i < arr.length; i++) {
//     if (max <= arr[i].length) {
//       max = arr[i].length;
//       result = arr[i]
//     }
//   }
//   return result;
// };
// console.log(findLongestString(arr));

// 13 Find the index of the last matching item of an array (polyfill for Array.prototype.findLastIndex, do with both)
// const arr = [2888, 3, 19, 144,19, 88, 989];
// const findLastIndex = (arr, search) => {
//   for (let i = arr.length; i >= 0; i--) {
//     if (arr[i] === search) {
//       return [arr[i], i];
//     }
//   }
//    return -1
// };
// console.log(findLastIndex(arr,19));

// 14 Find the index of the maximum item of an array
// const arr = [2888, 3, 19, 144, 88, 989];
// const maxElementIndex = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[max]) {
//         max=i
//     }
//   }
//   return max;
// };
// console.log(maxElementIndex(arr));

// 15 Remove falsy values from array

// function removeFalsyValue(arr) {
//   for (let i = 0; i < arr.length; i++) {
//    if (arr[i]) {
//     console.log(arr[i]);
//    }
//   }
// }
// const arr = [0, "hello", "", "", false, 0, null, undefined, "world", NaN,55];
// const filteredArray = removeFalsyValue(arr);
// console.log(filteredArray);
