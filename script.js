// const arr = [2, 4, 5, 6, 4, 5, 6, 4, 4, 4, 4, 5];

// function isCount(arr, ele) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       count++;
//     } else if (count == 0) {
//       count = 0;
//     }
//   }
//   return count;
// arr.forEach(element => {
//     if (ele === element) {
//               count++;
//             } else if (count == 0) {
//               count = 0;
//             }

// });
// return count
//   for (const val of arr) {
//     if (ele === val) {
//       count++;
//     } else if (count == 0) {
//       count = 0;
//     }
//   }
//   return count
// }

// console.log(isCount(arr, 41));

// const arr = [2, 4, 5, 6, 4, 5, 6, 4, 4, 4, 4, 5];

// function isCount(arr,val) {
//     const newArr = [];

//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i]===val) {
//     //         newArr.push(i)
//     //     }
//     // }
//     // arr.forEach((ele,i) => {
//     //     if(ele===val) {
//     //         newArr.push(i)
//     //     }
//     // });

//     return newArr
// }
// console.log(isCount(arr,4));


// let obj ={}
// let arr = [2, 4, 5, 6,2]
// // arr.forEach((ele) => obj[ele] = 1)
// // for (const ele of arr) {
// //     obj[ele]=1
// // }
// for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]]=1
// }

// console.log(Object.keys(obj));
// 4
let arr = [1,2,3,4,5].sort((a,b)=>a-b)
let newArr= [1,2,3,4,5].sort((a,b)=>a-b)
// let check = false
function every(arr,newArr) {
    if(arr.length!==newArr.length) return false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!==newArr[i]) {
            return false
        }
        return true
    }
    // arr.reduce((acc,val,i)=>{
    //     // if (val!==newArr[i])   return acc=false
    // console.log({acc,val,i});
    // },true)

}
console.log(every(arr,newArr));