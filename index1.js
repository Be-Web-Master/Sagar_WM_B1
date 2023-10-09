// Find the substring exists in a string or not - do not use built in method (includes or substring)
// const arr = [ "abcd", "advc", "babd", "cde" ]
// const substring = "ab"
// output - ["abcd", "babd"]
// function getStringsBySubstring(arr, substring) -this function will return an array of string which includes given substring

function getStringsBySubstring(arr, substring) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == substring[0] && arr[i][j+1] == substring[1]) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

const arr = ["abcd", "advc", "babd", "cde"];
const substring = "ab";
// output - ["abcd", "babd"]
console.log(getStringsBySubstring(arr, substring));
