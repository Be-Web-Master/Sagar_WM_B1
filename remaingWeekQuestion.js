// 1

// function capitalLizeFirstLetter(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i> 0) {
//       newStr += str[i]
//     } else {
//       newStr += str[i].toUpperCase();
//     }
//   }
//   return newStr
// }
// capitalLizeFirstLetter("webmaster");

// 2

// function checker(arr, check) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === check) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(checker([11, 34, 22, 21, 5, 22], 21));

// function ccc(...arr) {
//     let brr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//      brr.push(arr[i])
//   }
//   console.log(brr);
// }

// console.log(ccc(1, 2, 3, 4, 5, 6));

// let str = "madaam";
// let i = 0;
// let j = str.length - 1;
// while (i <=j ) {
//   if (str[i] !== str[j]) {
//     console.log("false");
//   }
//   console.log({i,j});
//   i++;
//   j--;
// }

// const peoples = [
//   { name: "a", age: 21 },
//   { name: "b", age: 20 },
//   { name: "c", age: 22 },
//   { name: "d", age: 21 },
//   { name: "e", age: 22 },
//   { name: "f", age: 22 },
// ];
// let max = 0;
// for (let i = 0; i < peoples.length; i++) {
//   let { name, age } = peoples[i];
//   if (max < age) {
//    max =
//   }

// for (const [key,value] of Object.entries(peoples[i])) {
//   console.log(key ,value);
//   console.log("--------------");
// }
// }
// console.log(max);
// expected output = {
// 21:[ { name:"a", age:21 }, { name:"d", age:21 }],
// 20: [{ name:"b", age:20 }],
// 22: [{ name:"c", age:22 }, { name:"e", age:22 },
// { name:"f", age:22 }]
// }

// function hhh(peoples) {
//   let obj = {};
//   for (let i = 0; i < peoples.length; i++) {
//     let key = peoples[i].age
//     if (obj[key]) {
//       obj[key] = [peoples[i],...obj[key]];
//     } else {
//       obj[key] = [peoples[i]];
//     }
//   }
//   console.log(obj);
// }
// hhh(peoples);
//  [1,2,3,4,5,6]
//   [4,5,6,1,2,3]

// function swapLeftBy(arr, swap) {
//   let temp = 0;
//   for (let i = 0; i < swap; i++) {
//     temp = arr.shift();
//     arr.push(temp);
//   }
//   console.log(arr);
// }
// console.log(swapLeftBy([1, 2, 3, 4, 5, 6], 3));

// const str = "WebMaster wEBmasTer Best";
// function fun(str) {
//   let newStr = str.toLowerCase().replaceAll(" ", "");
//   let obj = {};
//   for (let i = 0; i < newStr.length; i++) {
//     if (obj[newStr[i]]) {
//       obj[newStr[i]]++;
//     } else {
//       obj[newStr[i]] = 1;
//     }
//   }
//   let arr = Object.entries(obj);
//   let maxKey = 0;
//   let maxValue = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][1] > maxKey) {
//       maxKey = arr[i][1];
//       maxValue = arr[i][0];

//     } else {
//     }
//   }
//   return [maxKey,maxValue]
// }

// console.log(fun(str));
// function findFirstMissingNumber(arr) {
//   let start = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (start++ == arr[i]) {
//       continue;
//     } else {
//       return --start;
//     }
//   }
//   return ++arr[arr.length - 1];
// }
// let arr = [4, 5, 8, 9, 10];
// let arrr = [0,1, 2, 3, 3, 5];
// const arr1 = [11, 12, 13, 14, 15];
// console.log(findFirstMissingNumber(arrr));

// function findMajorityElement(arr) {
//   const obj = {};
//   let max = 0;
//   let maxKey = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]]++;
//     } else obj[arr[i]] = 1;
//   }
//   console.log(obj);
//   for (const [key, value] of Object.entries(obj)) {
//     if (max < value) {
//       max = value;
//       maxKey = key;
//     }
//   }
//   return {maxKey,max}
// }

// const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
// // output - 4

// // const arr = [1,1,1,3,3,3,2,2]
// // output - 1
// console.log(findMajorityElement(arr));

// function reverseWords(str) {
//   str=str.split(' ')
//   console.log(str);
//   let newStr = ''
//   for (let i = 0; i < str.length; i++) {
//      console.log(str[i]);
//      for (let  j = str[i].length-1; j >= 0; j--) {
//         newStr +=str[i][j]
//      }
//      newStr +=' '

//   }
//   console.log(newStr);
// }
// const str = "webMaster is Best"
// console.log(reverseWords(str));

// function findMaxDublicate(arr) {
//   let obj = {};
//   let max = 0;
//   let k = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]]++;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }
//   console.log(obj);
//   for (const [key,val] of Object.entries(obj)) {
//     if (max<val) {
//       max=val
//       k=key
//     }
//   }
//   return [max,k];
// }
// const arr = [11, 1, 12, 2, 5, 5, 6, 11, 14, 11];
// console.log(findMaxDublicate(arr));

// function findUnion(arr1, arr2) {
//   arr1.sort();
//   arr2.sort();
//   let brr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         brr.push(arr1[i]);
//       }
//     }
//     console.log("----------");
//   }
//   console.log(brr);
// }
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 2, 3, 4, 5, 5, 6];
// console.log(findUnion(arr1, arr2));
//  console.log({a:arr1[i],b:arr2[j]});

// function findPeakElement(arr) {
//   let peak = arr[0];
//   for (let i = 1; i < arr.length - 1; i++) {

//     if((arr[i-1])>peak){
//   if (arr[i+1]>peak) {
//  return
//   }
//     }

//   }
//   return peak
// }
// const arr = [5, 10, 20, 15];
// output - 20, bcoz 20 is greater than its neighbours

const arr = [1,2,3,4,5]
// output - 5
console.log(findPeakElement(arr));
