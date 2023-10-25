// let s = "abcde".split("");
// let goal = "cdeab";
let s = "abcde".split("");
let goal = "abced"
console.log(isChecker(s, goal));
function isChecker(s, goal) {
  for (let i = 0; i < s.length; i++) {
    let temp = s.pop();
    s.unshift(temp);
    if (s.join('') === goal) {
      return true;
    }
  }
  return false;
}
