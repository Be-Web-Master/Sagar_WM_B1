
  // console.log("first");

  function movePositiveAndNegativeNumbers(arr) {
    const result = [];
    const posArr = [];
    const negArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) posArr.push(arr[i]);
      else negArr.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        let temp = posArr.shift()
        result.push(temp);
      } else {
        let temp = negArr.shift()
        result.push(temp);
      }
    }

    return result;
  }
  const arr = [-1, 1, 2, -2, 3, 4, -6, -7];
  //  [1,-1,2,-2,3,-6,4,-7]
  console.log(movePositiveAndNegativeNumbers(arr));


