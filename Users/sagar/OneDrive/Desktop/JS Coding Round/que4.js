// // console.log("444");
// Sort array of objects with the name key
// const arr = [{ name:"cde", age:12 }, { name:"abc", age:21 }, { name:"aaa", age:31 }, { name:"bcd", age:11 }]
// function sortWithName(arr) - this function will return sorted array
// output - [{ name:"aaa", age:31 }, { name:"abc", age:21 }, { name:"bcd", age:11 }, { name:"cde", age:12 }]

function sortWithName(arr) {

  let brr = arr.sort((a, b) => {
    if (a > b) {
      b.name - a.name;
    } else {
      a.name - b.name;
    }
  });
  return brr;
}
const arr = [
  { name: "cde", age: 12 },
  { name: "abc", age: 21 },
  { name: "aaa", age: 31 },
  { name: "bcd", age: 11 },
];

// output -
//   [
//     { name: "aaa", age: 31 },
//     { name: "abc", age: 21 },
//     { name: "bcd", age: 11 },
//     { name: "cde", age: 12 },
//   ];
console.log(sortWithName(arr));
