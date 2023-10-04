// Find the string which have most vowels in it.
// const arr = ["ap", "aeioUtt", "qAeIoUar", "art"]
// output - qAeIoUar
// function findMostVowelString(arr) - this function will return an string with the most vowels

function findMostVowelString(arr) {
  let max = 0;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].toLowerCase().length; j++) {
      if (
        arr[i][j] == "a" ||
        arr[i][j] == "e" ||
        arr[i][j] == "i" ||
        arr[i][j] == "o" ||
        arr[i][j] == "u"
      ) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      res = arr[i];
    }
  }
  return res;
}
const arr = ["ap", "aeioUtt", "qAeIoUar", "art"];
// output - qAeIoUar
const output = findMostVowelString(arr);
console.log(output);
