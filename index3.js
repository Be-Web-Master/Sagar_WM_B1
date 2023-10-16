function candyTypeCheck(arr) {
  let count = 0;
  let result = [];
  const obj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else obj[arr[i]] = 1;
  }
//   for (const a of Object.entries(obj)) {
//     let temp = a[0]
//     console.log(temp);
//   }
console.log(obj);
}

const candyType = [1, 1, 2, 2, 3, 3];
// const candyType1 = [1, 1, 2, 3];
// const candyType2 = [6, 6, 6, 6];
console.log(candyTypeCheck(candyType));
// console.log(candyTypeCheck(candyType1));
// console.log(candyTypeCheck(candyType2));
