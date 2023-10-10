// Easy - Capitalize first letter of every string in an array
// const arr = [ "abcd", "Pqrs", "xyz", "lmno" ]
// output - [ "Abcd", "Pqrs", "Xyz", "Lmno" ]
// function capitalizeFirstChar(arr) - this function will return array of strings with the first character as capital

function capitalizeFirstChar(arr) {
    let output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i][0].toUpperCase() + arr[i].slice(1))
  }
  return output;
}
const arr = ["abcd", "Pqrs", "xyz", "lmno"];
// output - [ "Abcd", "Pqrs", "Xyz", "Lmno" ]
console.log(capitalizeFirstChar(arr));
