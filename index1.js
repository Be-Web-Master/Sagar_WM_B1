// const word = "USA";
const word = "FlaG"
console.log(isChecker(word));
function isChecker(str) {
  if (str.toUpperCase()===word) return true
  if (str.toLowerCase()===word) return true
  if (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()==str) return true
  return false
}
