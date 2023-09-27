console.log("question 3");
// Reverse words in a string
// const string = "WebMaster Batch One"
// output - "One Batch WebMaster"
// function getReversedWords(string) - this function will return string of the reversed words

const getReversedWords = (str) => {
  let arr = str.split(" ");
  let brr = [];

  for (let i = 0; i < arr.length; i++) {
    brr.unshift(arr[i]);
  }
  let newStr = brr.join(" ");
  return newStr;
};

const str = "WebMaster Batch One";
console.log(getReversedWords(str));
