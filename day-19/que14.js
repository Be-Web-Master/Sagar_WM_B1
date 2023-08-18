// Write a program that finds the maximum value in an array of numbers using the reduce method.

let arrayOfNumbers = [2, 8, 3, 4, 5];

console.log(findMaxValue(arrayOfNumbers));

function findMaxValue(arrayOfNumbers) {
  return arrayOfNumbers.reduce((accu, val) => {

    return val > accu ? val : accu;
    
  }, arrayOfNumbers[0]);
}
