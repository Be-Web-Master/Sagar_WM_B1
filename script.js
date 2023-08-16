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

// 11 Create an object and check for isSealed after applying
// .seal and without applying .seal

// const obj1 = {
//     name:"dhanoo",
//     class:"16th"
// }
// Object.seal(obj1)
// console.log(Object.isSealed(obj1))
// return true or false if Object.seal method are apply then is return true else false

// Q12: Create an object and check for isExtensible after applying
//  .preventExtensions and without applying .preventExtensions

// const obj = {
//   name: "dhanoo",
//   class: "16th",
// };
// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));

// Q13: Create an object and check for isFrozen after applying .freeze and without applying .freeze

// const obj2 = {
//     name: "dhanoo",
//     class: "16th",
//   };
//   Object.freeze(obj2);
//   console.log(Object.isFrozen(obj2));

// Q14: Create an object and gets it’s prototype

// const obj2 = {
//   name: "dhanoo",
//   class: "16th"
// }
// console.log(Object.getPrototypeOf(obj2))

// Q15: Create two objects obj1, obj2 and set obj1’s prototype on the
// obj2 object and try to get obj1 properties through obj2, which should not exist in obj2 before.

// answer 1

// const obj1 = {
//   name: "dhanoo",
//   age: "16th",
// };
// const obj2 = {
//   name: "ritik",
//   class: "15th",
//   __proto__: obj1,
// }
// console.log(Object.getPrototypeOf(obj2))
// console.log(obj2.age)

// answer 2

// const obj1 = {
//   name: "dhanoo",
//   age: "16th",
// };
// const obj2 = {
//   name: "ritik",
//   class: "15th",
// };
// Object.setPrototypeOf(obj2,obj1)
// console.log(obj1);
// console.log(obj2);
// console.log(obj2.age)

// Q16: Create an object and apply .entries then create a
//  new object using .fromEntries() and assign it in myObj2.

const obj1 = {
  name: "dhanoo",
  age: "16th"
}
const obj1x = Object.entries(obj1)

const entries1 = new Map([
    ["foo",'bar'],
    ["foo1",'bar2'],
])
const myObj = Object.fromEntries(entries1)
console.log(myObj);


// console.log(entries1);
// Q17: Create an object and try to check two properties using
//  .hasOwnProperty, second property should not exist.

// const objjj = {
//     name : "sagar",
//     age: 23
// }
// console.log(Object.hasOwn(objjj,name));
// console.log(Object.hasOwnProperty(objjj,age));



// error
