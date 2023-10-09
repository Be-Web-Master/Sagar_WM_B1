// Remove same character from a string if it exists 3 times
// const string = "aabbaa"
// output - "bba"
// function removeSubstring(string) - this function will return string
// explanation - a appeared 3 times so we have remove 3 a's
// b appeared 2 times so can't remove
// last a will not be removed bcoz we don't have another 2 a's in the string

function removeSubstring(string) {
  let check = 3;
  //   let count = 1;
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    let count = 1;
    for (let j = i; j < string.length; j++) {
      if (string[i] === string[j]) {
        ++count;
        console.log(count + "if");
      } else {
        count = 1;
        console.log(count + "else");
      }
      console.log(count);
    }
    return;
    if (count >= 1) {
      if ((count = 1)) {
        newStr += string[i];
      }
      if ((count = 2)) {
        newStr += string[i];
      }
      if (count > 3) {
        newStr += string[i];
      }
    }
  }
  return newStr;
}
const string = "aabbaa";
// output - "bba"

console.log(removeSubstring(string));
