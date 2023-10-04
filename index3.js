// console.log("33");
// Implement Bubble Sort
// const arr = [11,4,6,14,2,51,1]
// output - [1,2,4,6,11,14,51]
// function bubbleSort(arr) - this function will return sorted array
function bubbleSort(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}

const arr = [11, 4, 6, 14, 2, 51, 1];
console.log(bubbleSort(arr));
