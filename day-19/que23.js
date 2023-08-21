// Convert a given string to uppercase using a loop.

function myUpperCase(str) {
  const newArr = [];
  const strToArr = str.split("");
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].charCodeAt() >= 65 && strToArr[i].charCodeAt() <= 91)
        newArr.push(strToArr[i]);
      console.log("big =>"+strToArr[i]);
    if (strToArr[i].charCodeAt() >= 97 && strToArr[i].charCodeAt() <= 123) {
      let cpy = strToArr[i].charCodeAt() - 32;
      console.log(cpy);
      console.log("small =>"+strToArr[i]);
        newArr.push(String.fromCharCode(cpy));
    }else {
      newArr.push(strToArr[i]);
      console.log("other =>"+ strToArr[i]);
    }
  }
  return newArr.join("");
}

let str = "abc ? Abc";
console.log(myUpperCase(str));

