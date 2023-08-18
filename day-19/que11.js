// Write a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter method.
let arrayOfNumbers = [12, 3, 4, 5, 6, 7, 8, 9, 1, 1, 3, 4, 5];

function isPrime(num) {
  if (1 >= num) {
    return false;
  }
  for (let i = 2; i <= num/2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeNumberCheck() {
  return arrayOfNumbers.filter((elm) => isPrime(elm));
}

console.log(primeNumberCheck());
