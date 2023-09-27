console.log("que4");
// Count the frequency of each Character in a string
// const string = "WebMaster wEBmasTer Best"
// function getFrequency(string) - this function will return an object containing frequency of each character, lowercase and uppercase of a character considered as single character
// output
// { w : 2
// e : 5
// b : 3
// m : 2
// a : 2
// s : 3
// t : 3
// r : 2
// }

const getFrequency = (str) => {
  let arr = str.toLowerCase().replaceAll(" ", "").split("");
  const frequencies = {};
  for (const item of arr) {
    if (frequencies[item]) {
      frequencies[item]++;
    } else {
      frequencies[item] = 1;
    }
  }
  return frequencies;
};
const str = "WebMaster wEBmasTer Best";
console.log(getFrequency(str));
