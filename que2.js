
// Write a function to find the sum of all the non-repeating elements
// const arr = [1,1,2,4,5,5,3]
// function getUniqueNumberSum(arr) - this function will return sum of all unique numbers
// output - 2 + 4 + 3 = 9

function getUniqueNumberSum(arr) {
    const obj = {};
    let  sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1);
      if (obj[arr[i]]) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      }
    }
    for (const [key, value] of Object.entries(obj)) {
      if (value == 1) {
        sum = sum + Number(key);
      }
    }
    return sum
  }
  const arr = [1, 1, 2, 4, 5, 5, 3];

  console.log(getUniqueNumberSum(arr));
