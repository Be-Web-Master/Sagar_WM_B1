// const arr = [22, 33, 44, 56, 44, 12, 32, 10, 9];

// const bubbleSort = (arr) => {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
// };
// bubbleSort(arr);
// console.log(arr);

// const arr = [22, 33, 44, 56, 44, 12, 32, 10, 9];

// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     let temp = arr[i];

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   console.log(arr);
// };

// selectionSort(arr);
// console.log(arr);

// const arr = [6, 8, 11, 9, 3, 5, 15, 1];

// function insertionSort(arr) {
//   const n = arr.length;

//   for (let i = 1; i < n; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//       // console.log(arr);
//     }
//     arr[j + 1] = current;
//   }
// }
// console.log("hello");
// insertionSort(arr);
// console.log(arr);

// const arr = [6, 8, 11, 9, 3, 5, 15, 1].map((num) => [num]);
// console.log(arr);
// mergeSort(arr);

function mergeSort(arr1, arr2) {
  let idx1 = 0;
  let idx2 = 0;
  let resultArr = [];
  while (arr1.length && arr2.length) {
    console.log("hello");
    if (arr1[idx1] > arr2[idx2]) {
      resultArr.push(arr2[idx2]);
      if (arr2.length - 1 !== idx2) {
        ++idx2;
      } else resultArr.push(arr2.slice(idx2));
    } else {
      resultArr.push(arr1[idx1]);
      if (arr1.length - 1 !== idx1) ++idx1;
    }
  }
  return resultArr;
}
const arr1 = [5, 8, 9];
const arr2 = [2, 1, 7];
const mergeSorting = mergeSort(arr1, arr2);
console.log(mergeSorting);

