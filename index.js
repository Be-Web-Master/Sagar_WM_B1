// //Bubble Sort
// const arr = [22, 33, 44, 56, 44, 12, 32, 10, 9];
// console.log(bubbleSort(arr));
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     let temp = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     arr[i] = arr[min];
//     arr[min] = temp;
//   }
//   return arr;
// };
// const arr = [22, 33, 44, 56, 44, 12, 32, 10, 9];
// console.log(selectionSort(arr));

// function insertionSort(arr) {
//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = current;
//   }
//   return arr;
// }
// const arr = [6, 8, 11, 9, 3, 5, 15, 1];
// console.log(insertionSort(arr));
