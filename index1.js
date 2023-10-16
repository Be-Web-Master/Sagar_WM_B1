function lastWordLength(s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
}
// const s = "Hello World"
const s = " fly me to the moon ";
console.log(lastWordLength(s));
