// 21. Using loop, Create a function that takes a string as input and returns the reverse of that string.
// function strReverse(str) {
//     return  str.split('').reverse().join('')
//   }
//   console.log(strReverse("hellllllooo"));

function strReverse(str) {
  const strToArr = str.split("");
  let newStrToArr = [];
  for (let i = strToArr.length - 1; i > 0; i--) {
    newStrToArr.push(strToArr[i]);
  }
  return (res = newStrToArr.join(""));
}
console.log(strReverse("abcdefghijklmnopqrstuvwxyz"));
