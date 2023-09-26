const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

const negativeNumberArrangeBeginning = (arr) => {
  let small = 0;
  let j = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (small > arr[i]) {
      brr.unshift(arr[i]);
    } else brr.push(arr[i]);
  }
  return brr;
};

console.log(negativeNumberArrangeBeginning(arr));

