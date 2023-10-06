// Implement Selection Sort - ascarr[arr.length-i]ing order
// const arr = [11, 20, 3, 14, 50, 9]
// function selectionSort(arr) - this function will return array of sorted elements in ascending order
// output = [3,9,11,14,20,50]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let temp = arr[i];

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
}
const arr = [11, 20, 3, 14, 50, 9];
console.log(selectionSort(arr));
