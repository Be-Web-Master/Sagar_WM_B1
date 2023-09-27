// Remove all the special characters from a string
// const string = "We;b*M:a!s;te**:r!"
// function removeSpecialCharacters(string) - this function will return an string which do not have any special character (alphabets and numbers are not considered as special characters)
// output - WebMaster

const removeSpecialCharacters = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i].charCodeAt() > 97 && str[i].charCodeAt() < 122) ||
      (str[i].charCodeAt() > 65 && str[i].charCodeAt() < 90)
    ) {
      newStr += str[i];
    }
  }
 return newStr
};

const str = "We;b*M:a!s;te**:r!";

console.log(removeSpecialCharacters(str));
