const isContainsVowel = (string) => {
  const str = string.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      return true;
    }
  }
  return false;
};

const string = "quertp";

console.log(isContainsVowel(string));
