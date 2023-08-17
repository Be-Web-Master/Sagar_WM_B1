//  0 1 1 2 3 5 8 13 21
// // 0 0+1 1+1 2+1
// const fabinoArr = [];

// let n = 10;
// let first = 0;
// let second = 1;
// let sum = 0;
// fabinoArr.push(first);
// fabinoArr.push(second);
// for (let i = 0; i <= n; i++) {
//     sum = first + second;
//     first=second
//     second=sum
//     fabinoArr.push(sum)
// }

// let i = 0;
// while (i<n) {
//   sum = first + second;
//   first = second;
//   second = sum;
//   fabinoArr.push(sum);
//   i++;
// }

// let fabArrforEac = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// fabArrforEac.forEach((elm, i) => {
//   console.log({ elm, i });
//   sum = first + second;
//   first = second;
//   second = sum;
//   fabinoArr.push(sum);
// });
// fabinoArr.forEach((elm) => {
//   console.log(elm);
// });
