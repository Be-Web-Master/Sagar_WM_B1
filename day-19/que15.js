// Without using substring, Extract a substring from a given string based on start and end indices using loops.

function subStr(str, start, end) {
  if (!str) {
    return false;
  }
  const strToarr = str.split("");
  const cutStrToArr = [];
  for (let i = start; i < end; i++) {
    cutStrToArr.push(strToarr[i]);
  }
  return cutStrToArr.join('')
}
const res = subStr("hello world !!", 2, 10);
console.log(res);
