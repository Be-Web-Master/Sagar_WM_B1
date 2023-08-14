// map
// function myMap(arr, callback) {
//   if (!arr || Array.isArray(arr)) new Error(`${arr} is not a Array`);
//   if (!callback || typeof callback !== "function")  new Error(`${callback} is not a function`);

//   var newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     var arrElem = callback(arr[i], i, arr);
//     newArr.push(arrElem);
//   }
//   return newArr;
// }

// myMap([2, 4, 5, 9],(ele,i,arr)=>{
//     console.log(arr)
// })

// filter

//  function myFilter(callback, arr) {
//   if (!arr || !Array.isArray(arr)) new Error(`${arr} is not a Array`);
//   if (!callback || typeof callback !== "function")
//     new Error(`${callback} is not a function`);

//   var newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     const arrElem = callback(arr[i], i, arr);
//     if (arrElem) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// const brr = [1, 2, 5, 8, 9];

// console.log(myFilter((ele) => {
//     return ele > 2;
//   }, brr));

// forEach;
// function myForEach(arr, callback) {
//   if (!arr || !Array.isArray(arr)) new Error(`${arr} is not a Array`);
//   if (!callback || typeof callback !== "function")
//     new Error(`${callback} is not a function`);

//   var newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     callback(arr[i], i, arr);
//   }
// }

// const brr = [1, 2, 5, 8, 9];

// console.log(
//   myForEach(brr, (ele) => {
//     console.log(ele);
//   })
// );

// reduce

function myReduce(arr, callback, initialValue, thisArg) {
  let startIdx, accToBe;
  if (initialValue !== undefined) {
    if (!arr.length) return initialValue;
    accToBe = initialValue;
    startIdx = 0;
  }
  if (initialValue === undefined && !arr.length)
    new Error(`Cannot run reduce without initial value `);

  if (initialValue === undefined && arr.length) {
    accToBe = arr[0];
    startIdx = 1;
  }

  if (!arr || !Array.isArray(arr)) new Error(`${arr} is not a Array`);
  if (!callback || typeof callback !== "function")
    new Error(`${callback} is not a function`);

  var newArr = [];
  for (let i = startIdx; i < arr.length; i += 1) {
    accToBe = callback(accToBe, arr[i], i, arr);
  }
  return accToBe;
}

const brr = [1, 2, 5, 8, 9];

function callbackfunk(acc, ele, i, arr) {
  return acc + ele;
}

console.log(myReduce(brr, callbackfunk));
