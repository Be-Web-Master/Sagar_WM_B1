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
  let obj = {};
  let freq = 1;
  //  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwn(arr[i])) {
      obj[arr[i]] = ++freq;

      console.log(arr[i]+" if");
    } else {
      obj[arr[i]] = freq;
      console.log(arr[i]+" else");
    }
  }
  console.log(obj);
};
const str = "WebMaster wEBmasTer Best";
console.log(getFrequency(str));
