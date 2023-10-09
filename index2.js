// Implement Quick Sort
// const arr = [5,3,4,6,11,2,1]
// output - [1,2,3,4,5,6,11]
// function quickSort(arr) - this function will return an sorted array in ascending order

console.log("dekh ke kr rha hu");

function quickSort(arr) {
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  console.log(Math.floor(Math.random() * arr.length));
//   const left = [];
//   const right = [];
//   const equal = [];

//   for (const element of arr) {
//     if (element < pivot) {
//       left.push(element);
//     } else if (element > pivot) {
//       right.push(element);
//     } else {
//       equal.push(element);
//     }
//   }

//   return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage:
const unsortedArray =[5,3,4,6,11,2,1]
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 6, 7, 8, 9]
