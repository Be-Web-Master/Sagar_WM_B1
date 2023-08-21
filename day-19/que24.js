// 24. Truncate a given string to a specified length and add an ellipsis at the end using loops.

function trun(str, maxLength) {
  let str2 = "";
  for (let i = 0; i < maxLength; i++) {
     str2+=str[i]

    }
    return str2+=".."
}

console.log(trun("sagar", 2));
