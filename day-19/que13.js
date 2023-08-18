// Implement a function that uses the reduce method to calculate the sum of all elements in an array.
let arrayOfNumbers = [2, 3, 4, 5];

function sumOfElement(arrayOfNumbers) {
  return arrayOfNumbers.reduce((acc, val) => acc + val);
}

console.log(sumOfElement(arrayOfNumbers));
