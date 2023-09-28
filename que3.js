console.log("jj");

// Remove all the smaller characters from a string
// function removeSmallChars(string) - this function will return an string which does not have any small character
// const string = "AaBBccdeF"
// output - "ABBF"


function removeSmallChars(str) {
let newStr = ''
    for (let i = 0; i < str.length; i++) {
  if (str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90) {
     newStr+=str[i]
  }
    }
  return newStr
}
const str = "AaBBccdeF"
// output - "ABBF"

console.log(removeSmallChars(str));