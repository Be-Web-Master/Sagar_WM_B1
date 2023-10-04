// // console.log("444");
// Sort array of objects with the name key
// const arr = [{ name:"cde", age:12 }, { name:"abc", age:21 }, { name:"aaa", age:31 }, { name:"bcd", age:11 }]
// function sortWithName(arr) - this function will return sorted array
// output - [{ name:"aaa", age:31 }, { name:"abc", age:21 }, { name:"bcd", age:11 }, { name:"cde", age:12 }]

function sortWithName(arr) {
  return arr.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    // return 0;
  });
}
const arr = [
  { name: "Cde", age: 12 },
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
