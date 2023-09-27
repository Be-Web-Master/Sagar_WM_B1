console.log("222222");
// Swap Elements of array given index left
// const arr = [1,2,3,4,5,6]
// const swapLeftBy = 2
// output - [3,4,5,6,1,2]
// function getLeftSwappedArrayByIndex(arr, swapLeftBy) - this will return an swapped array with given index

const getLeftSwappedArrayByIndex=(arr, swapLeftBy)=>{
  for (let i = 0; i < swapLeftBy; i++) {
   let val = arr.shift()
   arr.push(val)
  }

  return arr
}

const swapLeftBy = 2
const arr = [1,2,3,4,5,6]
console.log(getLeftSwappedArrayByIndex(arr, swapLeftBy));
