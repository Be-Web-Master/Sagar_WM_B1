console.log("que3");

const arr = [0, 11, 4, 7, 6];
const checkOddIndexNumber = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0 && arr[i] % 2 !== 0)     ++count
  }
  
  if (count === Math.floor(arr.length / 2)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkOddIndexNumber(arr));
