const num = 2;
const arr = [2, 4, 6, 7];

const getDivisibleNumber = (arr, num) => {
  const brr = arr.filter((elm) => {
    if (elm % num === 0) {
        return elm
    }
  });
  //   for (let i = 0; i < arr.length; i++) {
  //     if(arr[i]%num===0){
  //         brr.push(arr[i])
  //     }
  //   }
  return brr;
};
console.log(getDivisibleNumber(arr, num));
