// Find the elements the divides the sum of all elements
// const arr = [1,2,3,4,5]
// output - [1, 3, 5]
// function findDivisibleElements(arr) - this function will return the array of elements

// eg - sum = 1 + 2 + 3 + 4 + 5 = 15
// 1, 3 and 5 divides 15 completely

function findDivisibleElements(arr) {
  let sumOfArr = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    sumOfArr += arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    if (sumOfArr % arr[j] == 0) {
      result.push(arr[j]);
    }
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
// output - [1, 3, 5]

const output = findDivisibleElements(arr);

console.log(output);
