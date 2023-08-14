// const obj = {
//   name: "dhanoo",
//   rollNumber: 23,
//   class: 6,
//   section: "A",
//   gender: "Male",
//   Country: "bharat",
// };

// obj keys
// for (const key in obj) {
//      console.log(key)
// }
// console.log(Object.keys(obj))

// obj values
// console.log(Object.values(obj))
// const objKeys = Object.values(obj)
// console.log(objKeys)

// key value

// const keyValues = Object.entries(obj)

// console.log(keyValues)

// 04 merge

// const obj1 = {name:'Dhanjay',gender:'Female'};
// const obj2 = {section:'B',gender:'male'};
// const obj3 = {country : "india"};

// console.log(Object.assign(obj1,obj2,obj3))

// 05

// const obj = {
//     name:"dhanoo",
//     class:"16th",
//     printStudentDetail:function(){
//         console.log(this.name+" "+this.class+" "+this.age)
//     }
// }
// const anotherObject = Object.create(obj)
// anotherObject.age= 22
// console.log(obj.printStudentDetail());
// console.log(anotherObject.printStudentDetail())

// 06

// const obj = {
//     name:"dhanoo",
//     class:"16th"
// }
// // Object.defineProperty(obj,{gender:"male",writable:true})

// const inObj = Object.defineProperty(obj,'gender',{value:"male",writable:true})
// console.log(inObj, obj);

// // output {name: 'dhanoo', class: '16th', gender: 'male'}

// 07

// const obj = {
//   name: "dhanoo",
//   class: "16th",
// };
// const newObj = Object.defineProperties(obj, {
//     gender: { value: "male" },
//     add: { value: "88", writable: true },
//   });
// console.log({obj, newObj});
// // output {name: 'dhanoo', class: '16th', gender: 'male', add: '88'}

// // 08

// const obj = {
//     name:"dhanoo",
//     class:"16th"
// }
// Object.preventExtensions(obj)

// output
// Object.defineProperties(obj,{ gender:{value:"male",writable:true},add:{value:"88"}})
// VM127:7 Uncaught TypeError: Cannot define property gender, object is not extensible
//     at Function.defineProperties (<anonymous>)
//     at <anonymous>:7:8

// // // 09
// const obj = {
//     name:"dhanoo",
//     class:"16th"
// }
// Object.seal(obj)
// Object.defineProperties(obj,{gender:{value:"male"},add:{value:"888"}})
// delete obj.name
// console.log(obj)


// output  { name: 'dhanoo', class: 88 }

// // 10
// const obj = {
//     name:"dhanoo",
//     class:"16th"
// }
// Object.freeze(obj)

// Object.defineProperties(obj,{gender:{value:"male"},add:{value:"888"}})
// delete obj.name

// console.log(obj)

