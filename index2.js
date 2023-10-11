
function myMap(arr,callback) {
if (!arr || Array.isArray(arr)) new Error(`${arr} is not a Array`)
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    var arrElm = callback(arr[i],i,arr)
    newArr.push(arrElm)
  }
  return newArr
}

const arr = [1,2,3,4,5,6]
// let b = "ss"
myMap(arr,(elm,i)=>{
    console.log(arr);
})