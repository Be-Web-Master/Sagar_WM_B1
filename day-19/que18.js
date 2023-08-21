function check(str) {
  let vowels = 0;
  let consonants = 0;
  const strToArr = str.split("");

  //   console.log(strToArr);
  for (let i = 0; i < strToArr.length; i++) {
    if (
      strToArr[i] === "a" ||
      strToArr[i] === "e" ||
      strToArr[i] === "i" ||
      strToArr[i] === "o" ||
      strToArr[i] === "u"
    ) {
      //   console.log("v"+strToArr[i]);
      ++vowels;
    } else {
      ++consonants;
      //   console.log(strToArr[i]);
    }
  }
  return { vowels, consonants };
}

console.log(check("the quick brown fox jumps over the lazy dog"));
