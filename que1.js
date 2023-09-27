console.log("11111111");
// Convert the capital character to lowercase and lowercase character to uppercase
// given string = "WebMaster"
// output - "wEBmASTER"
// function toggleEachCharacter(string) - this function will return the converted string

const toggleEachCharacter = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() > 97 && str[i].charCodeAt() < 122) {
      newStr += str[i].toUpperCase();
    }
    if (str[i].charCodeAt() > 65 && str[i].charCodeAt() < 90) {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr
};

const str = "WebMaster";
console.log(toggleEachCharacter(str)
);