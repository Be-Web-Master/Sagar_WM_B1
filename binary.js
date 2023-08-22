function binary(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== searchValue && start <= end) {
    if (arr[middle] < searchValue) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === searchValue) return middle;

  return -1;
}

console.log(binary([11, 22, 33, 44, 55, 66, 77, 88, 99], 9));
