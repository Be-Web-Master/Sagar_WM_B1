// console.log("5-----5");

// Reverse all the words of a string - do not use built-in method
// function reverseWords(string) - this function will return an string having reversed words

function reverseWords(str) {
  let arr = str.split(" ");
  let newStr = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length-1; j >=0; j--) {
        newStr+=arr[i][j]
    }
    newStr+=' '


  }
 return newStr
}

const str = "webMaster is Best";
console.log(reverseWords(str));

// output - "retsaMbew si tesB"
