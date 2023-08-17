const arr = ["dhanoo", "ritik"];
const newArr=[]
let i = 0;
for (const word of arr) {
  const firstA = word.charCodeAt(word[i]) - 32;
  const firstVal = String.fromCodePoint(firstA);
  const firstDigit = word.charAt(i);
  let newStr = word.replace(firstDigit, firstVal);
  newArr.push(newStr)
}
console.log(newArr)

