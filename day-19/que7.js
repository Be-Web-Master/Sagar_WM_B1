function calculateEvenSum(arr) {
  let sum = 0;
  for (const val of arr) {
    if (val % 2 == 0) sum += val;
  }
  return sum;
}
console.log(calculateEvenSum([1, 5, 7, 8, 6, 2]));
