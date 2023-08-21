// Create a program that counts the occurrence of each character in a given string and displays the character count.
const str ="aaabbbbccccc";
const obj = {};
function counter(str,char) {
  for (const word of str) {
    if (obj[word])  obj[word]+=1;
    else   obj[word] = 1;
  }
  return {obj,char:obj[char]};
}

console.log(counter(str,'c'));
