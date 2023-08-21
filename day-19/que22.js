// Create a program that counts the occurrence of each character in a given string and displays the character count.
const str = "aaabbbbc";
const obj = {};
function counter(str) {
  for (const char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

console.log(counter(str));
